import React, { VFC, useCallback, useRef, forwardRef } from 'react';
import { ChatZone, Section, StickyHeader } from './styles';
import useSWR from 'swr';
import fetcher from '@utils/fetcher';
import { IDM } from '@typings/db';
import Chat from '@components/Chat';
import { Scrollbars } from 'react-custom-scrollbars';

interface Props {
  chatSections: { [key: string]: IDM[] };
}

const ChatList = forwardRef<Scrollbars, Props>(({ chatSections }, ref) => {
  const onScroll = useCallback((vlaues) => {
    if (vlaues.scrollTop === 0) {
      console.log('가장 위');
    }
  }, []);
  return (
    <ChatZone>
      <Scrollbars autoHide ref={ref} onScrollFrame={onScroll}>
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
});

export default ChatList;
