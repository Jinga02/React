// import Workspace from '@layouts/Workspace';
import ChatBox from '@components/ChatBox';
import ChatList from '@components/ChatList';
// import InviteChannelModal from '@components/InviteChannelModal';
import useInput from '@hooks/useInput';
import { Container, Header } from '@pages/Channel/styles';
import makeSection from '@utils/makeSection';
import React, { useCallback, useState } from 'react';
// Workspace로 감싸면 안의 div태그가 Workspace.tsx의 children이 됨
// 다른 JSX안에 넣으면 그 JSX의 children이 된다.
const Channel = () => {
  // const [showInviteChannelModal, setShowInviteChannelModal] = useState(false);
  // const onClickInviteChannel = useCallback(() => {
  //   setShowInviteChannelModal(true);
  // }, []);

  // const onCloseModal = useCallback(() => {
  //   setShowInviteChannelModal(false);
  // }, []);

  const [chat, onChangeChat, setChat] = useInput('');
  const onSubmitForm = useCallback((e) => {
    e.preventDefault();
    setChat('');
  }, []);
  // const chatSections = makeSection(chatData ? ([] as IChat[]).concat(...chatData).reverse() : []);

  return (
    // <Workspace>
    // <div>Channel!</div>
    // </Workspace>
    <Container>
      <Header>
        채널
        {/* <span>#{channel}</span>
        <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
          <span>{channelMembersData?.length}</span>
          <button
            onClick={onClickInviteChannel}
            className="c-button-unstyled p-ia__view_header__button"
            aria-label="Add people to #react-native"
            data-sk="tooltip_parent"
            type="button"
          >
            <i className="c-icon p-ia__view_header__button_icon c-icon--add-user" aria-hidden="true" />
          </button>
        </div> */}
      </Header>
      {/* <ChatList
        scrollbarRef={scrollbarRef}
        isReachingEnd={isReachingEnd}
        isEmpty={isEmpty}
        chatSections={chatSections}
        setSize={setSize}
      /> */}
      <ChatBox
        onSubmitForm={onSubmitForm}
        chat={chat}
        onChangeChat={onChangeChat}
        // placeholder={`Message #${channel}`}
        // data={channelMembersData}
      />
      {/* <InviteChannelModal
        show={showInviteChannelModal}
        onCloseModal={onCloseModal}
        setShowInviteChannelModal={setShowInviteChannelModal}
      /> */}
    </Container>
  );
};

export default Channel;
