## npm & node 버전

- npm 버전 확인

```bash
$ npm -v
# 최신 버전으로 업그레이드
$ npm install -g npm
```

- [nvm 설치](https://daechu.tistory.com/47) 및 버전 확인

```bash
# node 버전 지정해서 설치하기
$ nvm install 18.16.1

# 설치된 node.js 목록 확인하기
$ nvm list

# 특정 버전의 node 사용하기
$ nvm use 18.16.1

# 현재 사용중인 버전 확인하기
$ nvm current
```

## vite-typescript-react 설치

```bash
$ npm create vite@latest ${디렉터리 명} -- --template react-ts
$ npm install
$ npm run dev
```

## eslint

- eslint 설치 후 기본 셋팅

```bash
$ npm install --save-dev eslint
$ npx eslint --init
```

```
To check syntax and find problems
javscript modules (import/export)
react
yes (Does your project use Typescript?)
Browser (Where does your code run ?)
javascript (What format do you want your config file to be in? ) -> 원하는 형식을 사용해도 무관
yes (Would you like to install them now?)
npm or yarn or pnpm (Which package manager do you want to use ?)
```

### typescript를 사용하기 위한 추가 플러그인 설치

```bash
$ npm install --save-dev eslint-plugin-import @typescript-eslint/parser eslint-import-resolver-typescript
```

### package.json에 스크립트 추가

- **lint** lint 규칙을 지켰는지 확인해주는 명령

- **lint:fix** lint 규칙을 지켰는지 확인하고 지키지 않았다면 고쳐주는 명령

```json
"scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "lint": "eslint ./src/**/*.{ts,tsx,js,jsx}",
    "lint:fix": "eslint --fix ./src/**/*.{ts,tsx,js,jsx}"
  },
```

## Prettier 설치

```bash
$ npm install --save-dev eslint-config-prettier eslint-plugin-prettier eslint-plugin-react-hooks
```

### .prettierrc 파일 생성

```json
{
  "printWidth": 120,
  "semi": true,
  "singleQuote": false,
  "tabWidth": 2,
  "trailingComma": "es5",
  "arrowParens": "always"
}
```

### eslintrc.json 파일 수정

- extends의 제일 마지막에 prettier 설정 작성(마지막에 작성해야 모든 extends에 prettier 설정이 들어갈 수 있다.)

- plugin에 react-hooks와 prettier를 추가 작성

- react/react-in-jsx-scope는 위의 import 에러를 해결해주고 endOfLine은 delete CR 에러를 해결하기 위해 작성

- eslint-plugin-react 버전에 의한 Warning 메시지 없애기 위해 react version 작성

```js
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["@typescript-eslint", "react", "react-hooks", "prettier"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
  settings: {
  react: {
    version: "detect",
  },
},
```

### 무시할 파일 설정

- 체크가 필요 없는 파일은 `.eslintigonore`에 추가

## airbnb 설정 추가하기

-

## 타입스크립트에서 절대경로 사용하기

### 절대 경로 지정하기

- tsconfig.json에 complierOptions에 baseUrl과 paths를 추가

  baseUrl은 기본 경로이며, paths 속성에는 절대 경로를 지정하고 싶은 경로를 지정한다.

```json
"compilerOptions": {
	// ...
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
```

- tsx에서 import 예시

  ```ts
  import Here from "@src/Here";
  ```

- 만약 src 폴더 뿐만 아니라 다른 경로도 지정하고 싶다면 tsconfig.json의 paths에 다른 경로도 추가 작성하면 된다

### path를 vite에 등록하기

- tsconfig에서 작성한 path를 vite.config.ts에 작성해야 사용할 수 있는데 vite-tsconfig-paths 플러그인을 사용하여 간단하게 등록한다.

```bash
$ npm install --save-dev vite-tsconfig-paths
```

- vite.config.ts 수정

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
});
```
