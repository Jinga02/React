import { VFC, useCallback } from 'react';
import { Form, MentionsTextarea, SendButton, Toolbox } from './styles';
import React from 'react';
import exp from 'constants';

interface Props {
  chat: string;
  onSubmitForm: (e: any) => void;
  onChangeChat: (e: any) => void;
}

const ChatBox: VFC<Props> = ({ chat, onSubmitForm, onChangeChat }) => {
  // const onSubmitForm = useCallback(() => {}, []);

  return (
    <Form onSubmit={onSubmitForm}>
      <MentionsTextarea>
        <textarea value={chat} />
        <Toolbox>
          <SendButton
            className={
              'c-button-unstyled c-icon_button c-icon_button--light c-icon_button--size_medium c-texty_input__button c-texty_input__button--send' +
              (chat?.trim() ? '' : ' c-texty_input__button--disabled')
            }
            data-qa="texty_send_button"
            aria-label="Send message"
            data-sk="tooltip_parent"
            type="submit"
            disabled={!chat?.trim()}
          >
            <i className="c-icon c-icon--paperplane-filled" aria-hidden="true"></i>
          </SendButton>
        </Toolbox>
      </MentionsTextarea>
    </Form>
  );
};

export default ChatBox;
