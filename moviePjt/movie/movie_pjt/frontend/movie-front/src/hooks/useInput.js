import { useCallback, useState } from "react";

const useInput = (Data) => {
  const [value, setValue] = useState(Data);
  const handler = useCallback((e) => {
    setValue(e.currentTarget.value);
  }, []);
  // state와 callback를 합쳐서 한번에 반환
  return [value, handler, setValue];
};

export default useInput;
