// import Workspace from '@layouts/Workspace';
import { Container, Header } from '@pages/Channel/styles';
import React from 'react';
// Workspace로 감싸면 안의 div태그가 Workspace.tsx의 children이 됨
// 다른 JSX안에 넣으면 그 JSX의 children이 된다.
const Channel = () => {
  return (
    // <Workspace>
    // <div>Channel!</div>
    // </Workspace>
    <Container>
      <Header>채널!</Header>
    </Container>
  );
};

export default Channel;
