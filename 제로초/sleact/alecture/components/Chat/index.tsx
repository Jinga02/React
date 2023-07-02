import { IDM, IChat } from '@typings/db';
import React, { VFC, memo, useMemo } from 'react';
import { ChatWrapper } from './styles';
import gravatar from 'gravatar';
import dayjs from 'dayjs';
import regexifyString from 'regexify-string';
import { Link, useParams } from 'react-router-dom';
interface Props {
  data: IDM | IChat;
}
const Chat: VFC<Props> = ({ data }) => {
  // Sender이 데이터에 없으면 채널에서만 보낸거
  const user = 'Sender' in data ? data.Sender : data.User;
  const { workspace } = useParams<{ workspace: string; channel: string }>();

  // 정규표현식 문법 @[진가네도련님](3)
  // \d 숫자   +는 1개 이상 *는 0개 이상 ?는 0개나 1개 g는 모두 찾기
  // |는 또는 \n은 줄 바꿈
  // @[진가네도련님]12](3)
  // +는 최대한 많이 +?는 최대한 조금
  const result = useMemo(
    () =>
      regexifyString({
        input: data.content,
        pattern: /@\[(.+?)]\((\d+?)\)|\n/g,
        decorator(match, index) {
          const arr: string[] | null = match.match(/@\[(.+?)]\((\d+?)\)/)!;
          if (arr) {
            return (
              <Link key={match + index} to={`/workspace/${workspace}/dm/${arr[2]}`}>
                @{arr[1]}
              </Link>
            );
          }
          return <br key={index} />;
        },
      }),
    [data.content],
  );

  return (
    <ChatWrapper>
      <div className="chat-img">
        <img src={gravatar.url(user.email, { s: '36px', d: 'retro' })} alt={user.nickname} />
      </div>
      <div className="chat-text">
        <div className="chat-user">
          <b>{user.nickname}</b>
          <span>{dayjs(data.createdAt).format('h:mm A')}</span>
        </div>
        <p>{result}</p>
      </div>
    </ChatWrapper>
  );
};

export default memo(Chat);
