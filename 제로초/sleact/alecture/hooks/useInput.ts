import { ChangeEvent, Dispatch, SetStateAction, useCallback, useState } from 'react';

type Handler = (e: any) => void;
type ReturnTypes<T> = [T, (e: ChangeEvent<HTMLInputElement>) => void, Dispatch<SetStateAction<T>>];

// initialData만 매개변수로 적으면 TS에러
// any = 모든 값
// 타입스크립트 제네릭
// [T, (e: any) => void, Dispatch<SetStateAction<T>>] 이거랑 [value, handler, setValue]; 이거랑 같다
const useInput = <T>(initialValue: T): ReturnTypes<T> => {
  const [value, setValue] = useState(initialValue);
  const handler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value as unknown as T);
  }, []);
  // state와 callback를 합쳐서 한번에 반환
  return [value, handler, setValue];
};

export default useInput;
