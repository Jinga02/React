import React from 'react';
import { Container, Header } from './styles';
import useSWR from 'swr';
import fetcher from '@utils/fetcher';
import { useParams } from 'react-router';
import gravatar from 'gravatar';

const DirectMessage = () => {
  const { workspace, id } = useParams<{ workspace: string; id: string }>();
  const { data: userData } = useSWR(`api/workspaces/${workspace}/members/${id}`, fetcher);
  const { data: myData } = useSWR('api/users', fetcher);
  if (!userData || !myData) {
    return null;
  }
  console.log(userData + 123);
  return (
    <Container>
      <Header>
        <img src={gravatar.url(userData.email, { s: '24px', d: 'retor' })} alt={userData.nickname} />
        <span>{userData.nickname}</span>
      </Header>
      {/* <ChatList />
      <ChatBox /> */}
    </Container>
  );
};

export default DirectMessage;
