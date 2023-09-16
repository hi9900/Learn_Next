# Prettier

- [Prettier](https://prettier.io/)는 코드 포맷터(Code Formatter)로 JavaScript, CSS, JSON 등을 지원한다.

- 미리 약속한 코드 스타일에 맞춰 자동으로 코드의 형식을 수정해주는 도구로, 협업 시 여러 개발자들의 코드 스타일을 맞추는 데 큰 도움을 준다.

> ### 설치 및 적용

- prettier 설치

```bash
$ npm install --save-dev prettier
```

- prettier 설정

  - `.prettierrc.js` 파일을 생성하고 수정한다.

  ```js
  // .prettierrc.js
  module.exports = {
    singleQuote: true,
    trailingComma: "all",
    printWidth: 120,
  };
  ```

- 실행

  - package.json의 scripts를 수정한다.

  ```json
  // package.json
  {
    ...
    "scripts": {
      ...,
        "format": "prettier --check ./src",
        "format:fix": "prettier --write ./src"
      },
    ...
  }
  ```

# ESLint

- ESLint는 ES(ECMAScript)와 Lint(에러 코드 표식)의 합성어로, 자바스크립트의 코드를 분석하고 잠재적인 오류나 버그를 찾는 데 도움을 주는 정적 분석 툴이다.

- 여러 개발자들이 하나의 소스 코드를 수정하는 협업 환경에서 ESLint는 소스 코드를 분석하고 오류나 버그의 가능성을 지적하거나 소스 코드의 스타일을 일관성 있게 관리해주기 때문에 Prettier와 함께 자주 사용된다.

> ### 설치 및 적용

- 설치

```bash
$ npm install eslint --save-dev
```

- 설정

```bash
# 초기화 후 필요한 라이브러리 설치
$ npx eslint --init
Ok to proceed? (y) y

? How would you like to use ESLint? ...
> To check syntax and find problems
# 문제점 찾는 것과 잘못된 점을 고치는 스크립트를 따로 작성

? What type of modules does your project use? ...
> JavaScript modules (import/export)
# 자바스크립트 모듈 방식

? Which framework does your project use? ...
> React
# 리액트 프로젝트에 적용

? Does your project use TypeScript? » Yes
# 타입스크립트 적용

? Where does your code run? ...  (Press <space> to select, <a> to toggle all, <i> to invert selection)
√ Browser
# 리액트 브라우저는 웹 브라우저에서 실행되므로 Browser 옵션

? What format do you want your config file to be in? ...
> JavaScript
# 자바스크립트 형식으로 저장

? Would you like to install them now? » Yes
? Which package manager do you want to use? ...
> npm
# npm을 사용하여 추가 라이브러리 설치
```

- `eslintrc.js` 파일이 자동으로 생성된다.

  - extends를 살펴보면, ESLint, 리액트와 타입스크립트의 추천 룰을 사용하는 것을 확인할 수 있다.

- ESLint에 리액트 버전을 알려줄 필요가 있으며 react/react-in-jsx-scope 규칙의 사용을 중지시킬 필요가 있다.

> react/react-in-jsx-scope 규칙
>
> - JSX 파일에서 `import React from 'react'`를 항상 사용하도록 하는 규칙
>
> - 리액트 17 버전부터 사용할 필요가 없어졌다.

```js
// eslintrc.js
module.exports = {
  setting: {
    react: {
      version: 'detect',
    },
  },
  ...
  rules: {
    'react/react-in-jsx-scope': off,
  },
}
```

- 실행 스크립트 추가

```json
// package.json
  scripts: {
    "lint": "eslint ./src",
    "lint:fix": "eslint --fix ./src"
  }
```

- ESLint는 정적 소스 코드 분석 툴이기 때문에 간단한 문법적 오류나 복잡한 코드 스타일에 의해 발생할 가능성이 높은 버그만 찾을 수 있다.

- 프로그램이 실행 중에 발생하는 버그는 알 수 없으며, 비즈니스 로직에서 문제점을 찾을 수 없다.

- 따라서 ESLint에서 어떤 문제가 발생하지 않았다고 프로그램에 문제가 없다고 단정지어서는 안된다.
