import React, { VFC, useCallback, useRef, forwardRef, RefObject } from 'react';
import { ChatZone, Section, StickyHeader } from './styles';
import useSWR from 'swr';
import fetcher from '@utils/fetcher';
import { IDM, IChat } from '@typings/db';
import Chat from '@components/Chat';
import { Scrollbars } from 'react-custom-scrollbars';

interface Props {
  chatSections: { [key: string]: (IDM | IChat)[] };
  setSize: (f: (size: number) => number) => Promise<(IDM | IChat)[][] | undefined>;
  scrollRef: RefObject<Scrollbars>;
  isReachingEnd: boolean;
}

const ChatList: VFC<Props> = ({ chatSections, setSize, isReachingEnd, scrollRef }) => {
  const onScroll = useCallback((values) => {
    if (values.scrollTop === 0 && !isReachingEnd) {
      console.log('가장 위');
      // 데이터 추가 로딩
      setSize((prevSize) => prevSize + 1).then(() => {
        // 스크롤 위치 유지
        //
        if (scrollRef?.current) {
          // console.log(ref.current?.getScrollHeight(), values.scrollHeight);
          scrollRef.current?.scrollTop(scrollRef.current?.getScrollHeight() - values.scrollHeight);
        }
      });
    }
  }, []);
  return (
    <ChatZone>
      <Scrollbars autoHide ref={scrollRef} onScrollFrame={onScroll}>
        {Object.entries(chatSections).map(([date, chats]) => {
          return (
            <Section className={`section-${date}`} key={date}>
              <StickyHeader>
                <button>{date}</button>
              </StickyHeader>
              {chats.map((chat) => (
                <Chat key={chat.id} data={chat} />
              ))}
            </Section>
          );
        })}
      </Scrollbars>
    </ChatZone>
  );
};

export default ChatList;
