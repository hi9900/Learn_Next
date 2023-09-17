# Context API

- 리액트에서 데이터는 위에서 아래로, 한쪽 방향으로만 전달할 수 있다.

- 그러므로 같이 사용하고 싶은 데이터와 이 데이터를 사용할 위치에 공통 부모 컴포넌트에 State를 만들고,

  사용하고자 하는 데이터를 해당 컴포넌트까지 전달하여 이 문제를 해결할 수 있을 것이다.

- 하지만, 모든 컴포넌트에 Props를 전달하여 데이터를 사용하는 것은 매우 비효율적이다.

- 이와 같은 비효율적인 문제를 해결하기 위해 리액트에서는 Flux라는 개념을 도입했고, 그에 걸맞는 Context API를 제공하기 시작했다.

## Context

- Context는 부모 컴포넌트로부터 자식 컴포넌트로 전달되는 데이터의 흐름과 상관 없이 전역적으로 데이터를 관리할 수 있도록 한다.

- Context API를 사용하면, 전역 데이터를 Context에 저장한 후 필요한 컴포넌트에서 해당 데이터를 불러와 사용할 수 있다.

- Context를 사용하기 위해서는 Context API를 사용하여 해당 Context의 프로바이더(provider)와 컨슈머(Consumer)를 생성해야 한다.

- 그리고 Context에 저장된 데이터를 사용하기 위해서는 공통 부모 컴포넌트에 프로바이더를 사용하여 데이터를 제공하고,

  데이터를 사용하려는 컴포넌트에서 컨슈머를 사용하여 실제 데이터를 사용(소비)하게 된다.