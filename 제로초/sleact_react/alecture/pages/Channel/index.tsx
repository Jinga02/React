// import Workspace from '@layouts/Workspace';
import ChatBox from '@components/ChatBox';
import ChatList from '@components/ChatList';
// import InviteChannelModal from '@components/InviteChannelModal';
import useInput from '@hooks/useInput';
import useSocket from '@hooks/useSocket';
import { Container, Header } from '@pages/Channel/styles';
import { IChannel, IChat, IUser } from '@typings/db';
import fetcher from '@utils/fetcher';
import makeSection from '@utils/makeSection';
import axios from 'axios';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Scrollbars from 'react-custom-scrollbars';
import { useParams } from 'react-router';
import useSWR, { useSWRInfinite } from 'swr';
import { IDM } from '@typings/db';
import InviteChannelModal from '@components/InviteChannelModal';
import gravatar from 'gravatar';

// Workspace로 감싸면 안의 div태그가 Workspace.tsx의 children이 됨
// 다른 JSX안에 넣으면 그 JSX의 children이 된다.
const Channel = () => {
  const { workspace, channel } = useParams<{ workspace: string; channel: string }>();
  const { data: myData } = useSWR('/api/users', fetcher);
  const [chat, onChangeChat, setChat] = useInput('');
  const { data: channelData } = useSWR<IChannel>(`/api/workspaces/${workspace}/channels/${channel}`, fetcher);
  const {
    data: chatData,
    mutate: mutateChat,
    revalidate,
    setSize,
  } = useSWRInfinite<IChat[]>(
    (index) => `/api/workspaces/${workspace}/channels/${channel}/chats?perPage=20&page=${index + 1}`,
    fetcher,
  );

  const { data: channelMembersData } = useSWR<IUser[]>(
    myData ? `/api/workspaces/${workspace}/channels/${channel}/members` : null,
    fetcher,
  );

  const [socket] = useSocket(workspace);
  // 인피니트 스크롤링
  const isEmpty = chatData?.[0]?.length === 0;
  const isReachingEnd = isEmpty || (chatData && chatData[chatData.length - 1]?.length < 20) || false;
  const scrollbarRef = useRef<Scrollbars>(null);
  const [showInviteChannelModal, setShowInviteChannelModal] = useState(false);
  const onCloseModal = useCallback(() => {
    setShowInviteChannelModal(false);
  }, []);
  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      if (chat?.trim() && chatData && channelData) {
        // 서버에 다녀오지 않았지만 마치 성공해서 데이터가 있는것 처럼
        // 채팅 입력시 딜레이 없애기
        const savedChat = chat;
        mutateChat((prevChatData) => {
          prevChatData?.[0].unshift({
            id: (chatData[0][0]?.id || 0) + 1,
            content: savedChat,
            UserId: myData.id,
            User: myData,
            ChannelId: channelData.id,
            Channel: channelData,
            createdAt: new Date(),
          });
          return prevChatData;
        }).then(() => {
          setChat('');
          // 채팅 쳤을때 스크롤 가장 밑으로
          scrollbarRef.current?.scrollToBottom();
        });
        axios
          .post(`/api/workspaces/${workspace}/channels/${channel}/chats`, {
            content: chat,
          })
          .then(() => {
            revalidate();
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    [chat, chatData, myData, channelData, workspace],
  );

  const onMessage = useCallback(
    (data: IChat) => {
      // id는 상대방 아이디
      if (data.Channel.name === channel && data.UserId !== myData?.id) {
        mutateChat((chatData) => {
          chatData?.[0].unshift(data);
          return chatData;
        }, false).then(() => {
          if (scrollbarRef.current) {
            // 스크롤바를 150미만으로 올렸을때는 스크롤은 가장 밑으로 그 외에는 무시
            if (
              scrollbarRef.current.getScrollHeight() <
              scrollbarRef.current.getClientHeight() + scrollbarRef.current.getScrollTop() + 150
            ) {
              console.log('scrollToBottom!', scrollbarRef.current?.getValues());
              setTimeout(() => {
                scrollbarRef.current?.scrollToBottom();
              }, 100);
            }
            // else {
            //   toast.success('새 메시지가 도착했습니다.', {
            //     onClick() {
            //       scrollbarRef.current?.scrollToBottom();
            //     },
            //     closeOnClick: true,
            //   });
            // }
          }
        });
      }
    },
    [channel, myData],
  );
  useEffect(() => {
    socket?.on('message', onMessage);
    return () => {
      socket?.off('message', onMessage);
    };
  }, [socket, onMessage]);

  useEffect(() => {
    if (chatData?.length === 1) {
      // 스크롤 맨밑에서 시작
      scrollbarRef.current?.scrollToBottom();
    }
  });

  const onClickInviteChannel = useCallback(() => {
    setShowInviteChannelModal(true);
  }, []);

  if (!myData || !myData) {
    return null;
  }

  // Immutable (기존 데이터 불변)
  // const chatSections = makeSection(chatData ? [].concat(...chatData)?.reverse() : []);
  const chatSections = makeSection(chatData ? chatData.flat().reverse() : []);

  return (
    <Container>
      <Header>
        <img src={gravatar.url(myData.email, { s: '24px', d: 'retro' })} alt={myData.nickname} />
        <span>{myData.nickname}</span>
      </Header>
      <ChatList chatSections={chatSections} scrollRef={scrollbarRef} setSize={setSize} isReachingEnd={isReachingEnd} />
      <ChatBox chat={chat} onChangeChat={onChangeChat} onSubmitForm={onSubmitForm} />
    </Container>
  );
};

export default Channel;
