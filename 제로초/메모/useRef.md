# useRef란?

## 개념

> useRef는 React의 Hook 중 하나로, DOM 요소에 직접적으로 접근할 때나 인스턴스 변수와 같은 값들을 유지할 때 사용된다. <br>
> useRef는 렌더 사이클 사이에서도 값을 유지하며, 해당 값이 변경되어도 컴포넌트가 리렌더링 되지 않는다.

## 구성

> useRef 훅은 초기값을 선택적으로 매개변수로 받을 수 있다.

예를 들면:

```javascript
const refObject = useRef(initialValue);
```

> 여기서 initialValue는 refObject.current의 초기값으로 설정된다. 많은 경우에서 useRef를 사용하여 DOM 요소에 대한 참조를 저장하는 데 사용되기 때문에, 초기값으로 null을 자주 사용한다.
> <br>

```javascript
const myInput = useRef(null);
```

> 이 경우, myInput.current는 초기에 null이며, 나중에 DOM 요소를 참조할 수 있도록 변경할 수 있다.
> 초기값을 설정하지 않는 경우도 가능하며, 이때는 undefined가 기본값으로 설정다.

```javascript
const myRef = useRef();
```

> 이 경우, myRef.current의 초기값은 undefined 입니다.

## 언제 사용하는지?

## 1. DOM 요소 접근

> 특정 DOM 요소를 직접 조작할 필요가 있을 때, 예를 들어 입력 필드에 포커스를 주거나, 요소의 크기 및 위치 정보를 얻는 등의 경우에 사용한다.

```jsx
import React, { useRef, useEffect } from "react";

const FocusInput = () => {
  const inputRef = useRef(null);

  // 컴포넌트가 마운트되면 input 요소에 포커스를 줍니다.
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} type="text" />;
};

export default FocusInput;
```

> 위 예제에서는 useRef를 사용하여 input 요소에 대한 참조를 만들고, useEffect를 통해 컴포넌트가 마운트될 때 해당 요소에 포커스를 주고 있다.

## 2. 변수 유지

> 컴포넌트가 리렌더링 될 때마다 초기화되지 않고 값을 유지해야하는 경우 사용된다. 이는 클래스 컴포넌트의 인스턴스 변수와 유사한 역할을 한다.

```jsx
import React, { useRef, useEffect } from "react";

const Timer = () => {
  const count = useRef(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      count.current += 1;
      console.log(`Count: ${count.current}`);
    }, 1000);

    // 컴포넌트가 언마운트될 때 인터벌을 정리한다.
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>Check the console to see the count incrementing every second.</div>
  );
};

export default Timer;
```

> 이 예제에서는 useRef를 사용하여 count 변수를 유지한다. 이 변수는 시간이 지남에 따라 증가하지만, 컴포넌트는 리렌더링 되지 않는다. 이를 통해 클래스 컴포넌트의 인스턴스 변수와 비슷한 패턴을 구현할 수 있다. 이 경우에는 간단한 타이머 로직을 구현했다.

## 3. 이전 상태 또는 props 참조

> 컴포넌트의 이전 상태나 props에 접근해야 할 때, useRef를 사용하여 이를 참조할 수 있다. 이 경우는 ref 객체의 업데이트가 리렌더링을 발생시키지 않기 때문에 특히 유용하다.

```jsx
const count = useState(0);
const prevCountRef = useRef();

useEffect(() => {
  prevCountRef.current = count;
}, [count]);

console.log("Previous count:", prevCountRef.current);
```

## 4. 외부 라이브러리와 통합

> 때때로, React 외부에서 제공하는 라이브러리나 서드파티 컴포넌트를 사용할 때, 해당 라이브러리가 직접 DOM에 접근해야하는 경우가 있다. 이런 경우 useRef를 사용하여 해당 라이브러리에 DOM 요소를 전달할 수 있다.

> 이상과 같이 useRef는 React에서 다양한 목적으로 활용된다. 주로 DOM 요소에 접근하는데 사용되지만, 이외에도 참조를 유지해야 하는 다양한 값이나 객체들에 대해 사용될 수 있다.

## 5. forwardRef

forwardRef는 React에서 사용되는 고급 기능 중 하나로, ref를 자식 컴포넌트로 전달할 수 있도록 도와준다. forwardRef를 사용하여 ref를 자식 컴포넌트로 직접 전달할 수 있으므로, 자식 컴포넌트 내부에서 ref를 직접 다룰 수 있게 된다.

### 언제 사용하는지?

forwardRef는 다음과 같은 상황에서 사용된다.

1. HOC (Higher-Order Component)에서 ref 전달: HOC를 사용하여 컴포넌트를 감싸거나 래핑할 때, forwardRef를 사용하여 HOC가 ref를 자식 컴포넌트로 전달할 수 있다.

2. 컴포넌트 컴포지션: 여러 개의 하위 컴포넌트로 구성된 더 큰 컴포넌트에서도 forwardRef를 사용하여 ref를 전달할 수 있다.

3. 외부 라이브러리와의 통합: 외부 라이브러리가 ref를 사용하는 경우, forwardRef를 사용하여 React 컴포넌트와 라이브러리 간의 통합을 쉽게 할 수 있다.

### 어떻게 사용하는지?

forwardRef를 사용하는 방법은 다음과 같다.

forwardRef 함수를 사용하여 컴포넌트를 래핑한다. 이 함수는 props와 ref를 매개변수로 받는다.

```jsx
const MyComponent = React.forwardRef((props, ref) => {
  // 컴포넌트 로직
});
```

래핑된 컴포넌트 내부에서 ref를 사용하고자 하는 요소에 ref 속성을 할당한다.

```jsx
const MyComponent = React.forwardRef((props, ref) => {
  return <input ref={ref} />;
});
```

forwardRef로 래핑된 컴포넌트를 사용할 때, ref를 전달할 수 있다.

```jsx
const App = () => {
  const inputRef = React.useRef();

  return <MyComponent ref={inputRef} />;
};
```

위의 예시에서 inputRef는 MyComponent 내부의 input 요소를 가리키는 ref가 된다. 이제 App 컴포넌트에서 inputRef를 사용하여 MyComponent의 input 요소를 조작할 수 있다.

forwardRef를 사용하면 React에서 ref를 컴포넌트 계층 구조를 통해 전달할 수 있으므로, ref를 사용하는 외부 라이브러리와의 통합이나 컴포넌트 컴포지션 등에서 유용하게 사용할 수 있다.
