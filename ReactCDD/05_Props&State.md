# Props와 State

- 한 컴포넌트에는 컴포넌트의 특성을 나타내며 변경이 불가능한 데이터인 Props와 컴포넌트 안에서 해당 컴포넌트의 상태를 나타내며 변경이 가능한 데이터인 State가 존재한다.

## Props(Properties)

- 리액트의 특성을 나타내며, 이 특성을 통해 부모 컴포넌트가 자식 컴포넌트에 데이터를 전달할 수 있다.

- 부모 컴포넌트로부터 전달받는 데이터이고, 해당 컴포넌트의 특성이므로 자식 컴포넌트에서는 변경이 불가능하다.

## State

- 리액트 컴포넌트의 현재 상태를 의미하며, 이 컴포넌트 상태는 변경이 가능하다.

- State는 한 컴포넌트 안에서 유동적인 데이터를 다룰 때 사용되며, 컴포넌트 안에서 데이터를 변경할 수 있다.

  즉, State는 한 컴포넌트의 상태를 나타낸다.

---

## useState

- 리액트의 함수 컴포넌트에서 State를 사용하기 위해서는 리액트가 제공하는 useState 훅(Hook)을 사용할 필요가 있다.

- 리액트의 useState 훅은 함수로, 우리가 생성할 State 변수의 초깃값을 매개 변수로 전달하여 호출하며, 결괏값으로는 배열을 반환한다.

```js
const 배열 = useState(데이터 초깃값);
// 배열[0]: 데이터 초깃값이 들어간 변수
// 배열[1]: 데이터를 수정할 수 있는 set 함수
```

- 반환된 배열에는 초깃값이 할당된 변수와 해당 변수를 수정하기 위한 set 함수가 포함되어 있다.

- 자바스크립트의 구조 분해 할당 문법을 통해 변수와 set 함수를 할당하여 사용한다.

```js
const [변수명, set 함수명] = useState(데이터 초깃값);
```

---

## Props

- 타입스크립트 interface를 사용해 Props 정의

  interface는 객체의 스펙이나 함수의 매개 변수, 클래스 등을 정의할 때 사용된다.

```tsx
interface 인터페이스명 {
  변수명: 변수타입;
}
```

- 인터페이스명에는 어떤 이름도 사용이 가능하다.

  일반적으로 리액트 컴포넌트에서는 Props라는 이름을 사용한다.

```tsx
// components/Counter/Button/index.tsx
interface Props {
  readonly label: string;
  readonly onClick?: () => void;
}
```

- label이라는 읽기 전용의 문자열 데이터를 부모 컴포넌트로부터 필수로 전달받아야 한다.

  label을 전달받지 않으면 에러가 발생한다.

- 또한 onClick이라는 이름의 반환값을 가지지 않는(void) 함수를 선택적으로 전달받을 수 있다.

  물음표`(?)`는 해당 변수가 필수가 아닌 경우 사용되며, 부모 컴포넌트로부터 해당 값을 전달받지 않는다면, 해당 값은 undefined 값을 가지게 된다.

- 리액트 컴포넌트는 기본적으로 자바스크립트의 함수 형태를 띄고 있다.

  따라서 부모 컴포넌트로부터 전달받는 Props 데이터는 리액트 컴포넌트 함수의 매개변수로 전달받게 된다.

  ```js
  export const 컴포넌트명 = (Props 데이터) => {
    컴포넌트 구현
  }
  ```

  - 이렇게 전달받은 Props 데이터는 객체 형태를 가지게 된다.

  - 실무에서는 객체에 접근하는 방식을 사용하지 않고, 구조 분해 할당을 사용한다.

  ```tsx
  interface Props {
    readonly label: string;
    readonly onClick: () => void;
  }

  export const Button = ({ label, onClick }: Props) => {
    return <Container onClick={onClick}>{label}</Container>;
  };
  ```
