# Socket.IO

## Socket.IO란?

> Socket.IO는 Node.js 및 브라우저에서 실시간 양방향 통신을 위한 JavaScript 라이브러리이다. React와 함께 사용할 때, Socket.IO를 사용하여 React 애플리케이션에 실시간 데이터 푸시 및 실시간 업데이트 기능을 추가할 수 있다.

## 언제 자주 사용되는지?

> 1. 실시간 업데이트: Socket.IO는 실시간으로 데이터를 업데이트해야 하는 경우에 매우 유용하다. 예를 들어, 실시간 채팅 애플리케이션, 실시간 게임, 주식 시장 데이터 스트리밍 등에서 사용될 수 있다. Socket.IO를 사용하면 서버에서 데이터를 푸시하여 클라이언트에 실시간으로 업데이트할 수 있다.
>
> 2. 채팅 애플리케이션: Socket.IO는 채팅 애플리케이션과 같은 실시간 메시지 전송에 매우 적합하다. 클라이언트 간에 실시간으로 메시지를 교환하고 채팅 기록을 실시간으로 업데이트할 수 있다.
>
> 3. 실시간 협업: Socket.IO는 실시간 협업 도구나 공동 작업 애플리케이션에도 많이 사용된다. 여러 사용자가 동시에 동일한 문서를 편집하거나 실시간으로 화이트보드를 공유할 때 Socket.IO를 사용하여 실시간 동기화를 구현할 수 있다.
>
> 4. 실시간 알림: Socket.IO를 사용하면 서버에서 클라이언트에게 실시간 알림을 보낼 수 있다. 예를 들어, 알림을 푸시하고 새로운 이벤트나 업데이트를 사용자에게 실시간으로 알려야 하는 경우 Socket.IO를 사용할 수 있다.
>
> 5. 실시간 대시보드: Socket.IO는 실시간 대시보드를 구축하는 데 사용될 수 있다. 서버에서 발생한 이벤트, 센서 데이터, 모니터링 정보 등을 실시간으로 클라이언트에 업데이트하여 대시보드를 실시간으로 표시할 수 있다.
>
> Socket.IO는 이러한 상황에서 서버와 클라이언트 간의 실시간 양방향 통신을 가능하게 하므로, 실시간 업데이트 및 실시간 상호작용이 필요한 애플리케이션에서 자주 사용된다.

## react에서 사용하기

> Socket.IO를 React 애플리케이션에 통합하려면 몇 가지 단계를 따라야 한다.

### 1. 소켓 라이브러리 설치하기

React 프로젝트의 루트 디렉토리에서 다음 명령을 실행하여 소켓.IO를 설치한다.

>

```jsx
npm install socket.io-client
```

### 2. Socket.IO 클라이언트 구성하기

React 컴포넌트에서 Socket.IO를 사용하기 전에 클라이언트를 구성해야 한다. 일반적으로 애플리케이션의 엔트리 파일 또는 전역 상태 관리 로직에서 클라이언트를 구성한다.

>

```jsx
import { io } from "socket.io-client";
>
const socket = io("서버URL");
```

>

### 서버 URL

> 서버URL은 Socket.IO 서버의 주소를 나타낸다. Socket.IO는 클라이언트와 서버 간의 실시간 통신을 담당하는데, 클라이언트는 서버에 연결하기 위해 서버의 URL을 알아야 한다.
>
> 서버URL은 실제 Socket.IO 서버가 실행되는 위치 또는 호스트의 주소이다. 일반적으로 서버URL은 "http://localhost:포트번호" 형식을 가지며, 로컬 개발 환경에서는 "localhost"를 사용한다.
>
> 예를 들어, 로컬에서 개발 중인 Socket.IO 서버가 3000번 포트에서 실행된다면, 서버URL은 다음과 같을 수 있다.

```jsx
const socket = io("http://localhost:3000");
```

> 실제 운영 환경에서는 서버URL이 다를 수 있으며, 이는 Socket.IO 서버가 호스팅되는 서버의 도메인 이름 또는 IP 주소를 포함한다.

```jsx
const socket = io("https://example.com");
```

> 따라서 서버URL은 Socket.IO 클라이언트가 서버에 연결하기 위해 사용하는 서버의 주소를 의미한다. 해당 주소는 실제 Socket.IO 서버가 실행되는 위치에 따라 달라진다.

### 3. Socket.IO 이벤트 처리하기

> Socket.IO는 이벤트 기반으로 동작한다. 서버에서 보낸 이벤트를 수신하고 클라이언트에서 이벤트를 보내는 데 사용할 수 있다.
> Socket.IO를 사용하여 서버에서 이벤트를 수신하려면 socket.on 메서드를 사용한다.

```jsx
socket.on("이벤트명", (데이터) => {
  // 이벤트 처리 로직
});
```

> Socket.IO를 사용하여 클라이언트에서 이벤트를 보내려면 socket.emit 메서드를 사용한다.

```jsx
socket.emit("이벤트명", 데이터);
```

> 예를 들어, 채팅 애플리케이션을 개발한다고 가정해보자. 서버에서 새로운 메시지 이벤트를 보내고 클라이언트에서 이를 수신하여 화면에 표시하려면 다음과 같이 코드를 작성할 수 있다.

```jsx
// 수신 이벤트 처리
socket.on("newMessage", (message) => {
  // 메시지 처리 로직
});
>
// 메시지 전송
const sendMessage = (message) => {
  socket.emit("sendMessage", message);
};
```

### 4. 컴포넌트에서 Socket.IO 사용하기

> 이제 React 컴포넌트에서 Socket.IO를 사용할 수 있다. 컴포넌트의 상태 또는 이벤트 핸들러에서 Socket.IO 인스턴스를 참조하고, 이벤트를 수신하거나 전송할 수 있다.

```jsx
import React, { useEffect } from "react";
>
const ChatComponent = () => {
  useEffect(() => {
    // 컴포넌트 마운트 시에 Socket.IO 이벤트를 수신할 수 있음
    socket.on("newMessage", (message) => {
      // 메시지 처리 로직
    });
>
    return () => {
      // 컴포넌트 언마운트 시에 Socket.IO 이벤트 리스너 정리
      socket.off("newMessage");
    };
  }, []);
>
  const sendMessage = (message) => {
    socket.emit("sendMessage", message);
  };
>
  return <div>{/* 채팅 컴포넌트 UI */}</div>;
};
```

> 이와 같이 React와 Socket.IO를 통합하여 실시간 기능을 구현할 수 있다. Socket.IO를 사용하면 클라이언트와 서버 간의 실시간 양방향 통신을 쉽게 구축할 수 있다.
