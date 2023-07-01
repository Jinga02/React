import dayjs from 'dayjs';
import { IDM } from '@typings/db';

// chatList받아서 그룹화
export default function makeSection(chatList: IDM[]) {
  const sections: { [key: string]: IDM[] } = {};
  chatList.forEach((chat) => {
    const monthDate = dayjs(chat.createdAt).format('YYYY-MM-DD');
    if (Array.isArray(sections[monthDate])) {
      sections[monthDate].push(chat);
    } else {
      sections[monthDate] = [chat];
    }
  });
  return sections;
}
