import { Dispatch, SetStateAction, useCallback, useState } from 'react';

// initialData만 매개변수로 적으면 TS에러
// any = 모든 값
// 타입스크립트 제네릭
// [T, (e: any) => void, Dispatch<SetStateAction<T>>] 이거랑 [value, handler, setValue]; 이거랑 같다
const useInput = <T = any>(initialData: T): [T, (e: any) => void, Dispatch<SetStateAction<T>>] => {
  const [value, setValue] = useState(initialData);
  const handler = useCallback((e) => {
    setValue(e.currentTarget.value);
  }, []);
  console.log(value);
  // state와 callback를 합쳐서 한번에 반환
  return [value, handler, setValue];
};

export default useInput;
