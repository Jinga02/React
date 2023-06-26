// import Workspace from '@layouts/Workspace';
import InviteChannelModal from '@components/InviteChannelModal';
import { Container, Header } from '@pages/Channel/styles';
import React, { useCallback, useState } from 'react';
// Workspace로 감싸면 안의 div태그가 Workspace.tsx의 children이 됨
// 다른 JSX안에 넣으면 그 JSX의 children이 된다.
const Channel = () => {
  const [showInviteChannelModal, setShowInviteChannelModal] = useState(false);
  const onClickInviteChannel = useCallback(() => {
    setShowInviteChannelModal(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setShowInviteChannelModal(false);
  }, []);
  return (
    // <Workspace>
    // <div>Channel!</div>
    // </Workspace>
    <Container>
      <Header>
        {/* <span>#{channel}</span> */}
        <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
          {/* <span>{channelMembersData?.length}</span> */}
          <button
            onClick={onClickInviteChannel}
            className="c-button-unstyled p-ia__view_header__button"
            aria-label="Add people to #react-native"
            data-sk="tooltip_parent"
            type="button"
          >
            <i className="c-icon p-ia__view_header__button_icon c-icon--add-user" aria-hidden="true" />
          </button>
        </div>
      </Header>
      <InviteChannelModal
        show={showInviteChannelModal}
        onCloseModal={onCloseModal}
        setShowInviteChannelModal={setShowInviteChannelModal}
      />
    </Container>
  );
};

export default Channel;
