import axios from 'axios';
import { useCallback } from 'react';
import io from 'socket.io-client';

const backUrl = 'http://localhost:3095';
const sockets: { [key: string]: SocketIOClient.Socket } = {};

const useSocket = (workspace?: string): [SocketIOClient.Socket | undefined, () => void] => {
  const disconnect = useCallback(() => {
    if (workspace) {
      sockets[workspace].disconnect;
      delete sockets[workspace];
    }
  }, []);

  if (!workspace) {
    return [undefined, disconnect];
  }
  sockets[workspace] = io.connect(`${backUrl}/ws-${workspace}`);

  // hello라는 이벤트명으로 world라는 데이터를 보냄
  sockets[workspace].emit('hello', 'world');

  // message라는 이벤트명으로 콜백함수도 가능
  sockets[workspace].on('message', (data) => {
    console.log(data);
  });

  sockets[workspace].on('data', (data) => {
    console.log(data);
  });

  sockets[workspace].on('onLineList', (data) => {
    console.log(data);
  });
  return [socket[workspace], disconnect];
};

export default useSocket;
