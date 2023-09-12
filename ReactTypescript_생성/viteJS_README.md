## React + Vite

- 빠르고 간결한 모던 웹 프로젝트 개발에 초점을 맞춰 Vite 사용

> Create React App대신 사용하는 이유
>
> CRA는 JavaScript로 구성된 Webpack을 사용하는데 속도가 느린편이다.
> 평소에는 못느낄 수 있지만 처리해야 할 코드의 양이 많아질 수록 느린 속도를 체감할 수 있다.
> 위와 같은 단점을 해결하기 위해 Esbuild를 기반으로 만들어진 빌드툴인 Vite를 사용하게 된다.
>
> Esbuild: Go 언어로 작성된 JavaScript 빌드툴로 속도가 빠르다.

### Vite-React 프로젝트 생성

- Vite를 사용하기 위해서는 14.18+, 16+의 Node.js를 요구하며 템플릿에 따라 더 높은 버전의 Node.js를 요구할 수 있다.

- 특정 라이브러리 install 시 이상이 있을 경우, 검색을 통해 Vite-React 용 라이브러리가 있는 지 확인하기 (ex. svg 플러그인)

```bash
# npm 7+
$ npm create vite@latest ${디렉터리 명} -- --template ${템플릿 명}

# JavaScript react 템플릿 생성
$ npm create vite@latest ${디렉터리 명} -- --template react

# TypeScript react-ts 템플릿 생성
$ npm create vite@latest ${디렉터리 명} -- --template react-ts
```

### vite 실행

- package-lock.json 삭제 후 진행

- 그래도 안된다면, node_modules도 삭제 후 재시도

```bash
$ npm install
$ npm run dev
```

---

## ESLint & Prettier 설정: [airbnb style](https://github.com/airbnb/javascript/tree/master) 적용

- ESLint: 문법적인 오류를 잡고 코드 문법을 강제하는 등의 코드 품질을 위해서 사용

- Prettier: 코드의 최대길이, 홀따옴표(')나 쌍따옴표(") 중에 선호하는 스타일 적용과 같은 코드 스타일을 위해서 사용

- vsCode Extension ESLint, Prettier 설치

### ESLint & Prettier 설치

- developer dependency(--save-dev)로 설치

```bash
$ npm install --save-dev eslint prettier

# 의존성 패키지 확인
$ npm info eslint-config-airbnb peerDependencies

# 의존성 패키지를 포함하여 설치
$ npm install --save-dev eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks
or
# peerdeps 명령어를 사용함으로써 airbnb 설치시 필수 플러그인들이 설치된다.
$ npx install-peerdeps --dev eslint-config-airbnb

# eslint와 prettier 충돌방지 설정
$ npm install --save-dev eslint-config-prettier eslint-plugin-prettier
```

### 플러그인

eslint-plugin-react: React 규칙이 들어있는 플러그인

eslint-plugin-react-hooks: React Hooks 규칙이 들어있는 플러그인

eslint-plugin-jsx-a11y: JSX 요소의 접근성 규칙에 대한 정적 검사 플러그인

eslint-plugin-import: ES6의 import, export 구문을 지원하는 필수 플러그인

### eslint와 prettier 충돌방지 설정

eslint-config-prettier: Prettier와 충돌이 생길 수 있는 ESLint의 규칙들을 비활성화

eslint-plugin-prettier: ESLint로 Prettier를 실행하는 플러그인

### Prettier 설정

```json
// .prettierrc
{
  "singleQuote": true,
  "parser": "typescript",
  "semi": true,
  "useTabs": false,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 120,
  "arrowParens": "always"
}

// settings.json
{
   // Prettier
  // Set the default
  "editor.formatOnSave": true,
  // Enable per-language
  "[javascript]": {
    "editor.formatOnSave": false
  },
  "editor.codeActionsOnSave": {
    // For ESLint
    "source.fixAll.eslint": true
  },
  "eslint.alwaysShowStatus": true,
  "prettier.disableLanguages": ["js"],
  "files.autoSave": "onFocusChange",
}
```

- singleQuote : quote를 single로 사용할지, double로 사용할지 결정

- semi : 명령문 마지막에 semiclons를 붙일지 말지의 여부

- quoteProps : 객체 안에 key의 따옴표를 quote를 감싸지 않으면 안되는 문자가 있을때만 사용

- useTabs : 공백 대신 탭으로 줄을 들여 쓸지에 대한 여부를 물어본다.

- printWidth : 라인의 최대 길이 설정으로 120으로 설정했다.

- tabWidth : 들여쓰기의 칸 수를 말하며 2칸으로 설정했다.

- arrowParens : 화살표 함수에서 매개변수를 항상 괄호로 감싸도록 설정했다.

### Eslint 설정

```js
// .eslintrc.cjs

module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ["airbnb", "plugin:prettier/recommended"],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: "module",
  },
  settings: { react: { version: "18.2" } },
  plugins: ["react", "prettier"],
  rules: {
    // 무시할 룰 추가하기
    "react/react-in-jsx-scope": 0,
    "react/prefer-stateless-function": 0,
    "react/jsx-filename-extension": 0,
    "react/jsx-one-expression-per-line": 0,
    "no-nested-ternary": 0,
  },
};
```

- [Eslint 에러 대처 방법](https://pusha.tistory.com/entry/Eslint-%EC%97%90%EB%9F%AC-%EB%8C%80%EC%B2%98-%EB%B0%A9%EB%B2%95)

- https://velog.io/@_jouz_ryul/ESLint-Prettier-Airbnb-Style-Guide%EB%A1%9C-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0#22-eslint-config-prettier--eslint-plugin-prettier

<!--
3. React-router-dom 세팅
react-router-dom 패키지, types을 프로젝트에 설치
npm install react-router-dom @types/react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
return (

<div>
<BrowserRouter>
<Routes>
<Route path="/" element={<div></div>}></Route>
</Routes>
</BrowserRouter>
</div>
);
}

export default App;

4. Styled-componets 세팅
   styled-components와 types을 프로젝트에 설치
   npm install styled-components @types/styled-components

5. recoil 세팅
   리코일 설치
   npm install recoil

6. SVG 확장자 사용 세팅
   custom.d.ts 작성
   // .svg 확장자의 파일에서 ReactComponent의 존재를 인식시켜 주는 부분

declare module '\*.svg' {
import React = require('react');
export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
const src: string;
export default src;
}

vite 플러그인 설치
npm i vite-plugin-svgr

vite.config.ts 수정
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
plugins: [react(), svgr()],
});
-->
