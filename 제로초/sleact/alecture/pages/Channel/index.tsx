// import Workspace from '@layouts/Workspace';
import InviteChannelModal from '@components/InviteChannelModal';
import { Container, Header } from '@pages/Channel/styles';
import React, { useCallback, useState } from 'react';
// Workspace로 감싸면 안의 div태그가 Workspace.tsx의 children이 됨
// 다른 JSX안에 넣으면 그 JSX의 children이 된다.
const Channel = () => {
  const [showInviteChannelModal, setShowInviteChannelModal] = useState(false);

  const onCloseModal = useCallback(() => {
    setShowInviteChannelModal(false);
  }, []);
  return (
    // <Workspace>
    // <div>Channel!</div>
    // </Workspace>
    <Container>
      <Header>채널!</Header>
      <InviteChannelModal
        show={showInviteChannelModal}
        onCloseModal={onCloseModal}
        setShowInviteChannelModal={setShowInviteChannelModal}
      />
    </Container>
  );
};

export default Channel;
