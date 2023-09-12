## husky

- 설치 및 적용

```bash
$ npm install husky --save-dev

# husky에 등록된 hook을 실제 .git에 적용시키기 위한 스크립트
$ npx husky install
```

- 다른 사람들이 이 파일을 install 할 때 자동으로 husky까지 받아지게 하기 위해 script 추가

  prettier, eslint를 검사하는 명령어도 추가

```json
// package.json
"scripts": {
  "postinstall": "husky install",
  "format": "prettier --cache --write .",
	"lint": "eslint --cache .",
  },
```

- postinstall은 npm install을 하게되면 자동으로 받아지게 해주지만

  format과 lint는 npm run 일일히 실행해 검사해야 한다.

- 팀 작업을 위한 룰 강제를 위한것이 husky 이기에 github에 push하거나 commit을 작성하려할 때마다 format과 lint가 먹히도록 하자

```bash
$ npx husky add .husky/pre-commit "npm run format"
$ npx husky add .husky/pre-push "npm run lint"
```

- husky에는 test를 돌리도록 할 수도 있고 많은 작업을 설정할 수 있으니 팀 내의 의도에 맞게 조작을 하면 될 것이다.

### 시도

- 프로젝트 폴더 상위에 `.git` 이 존재하므로 프로젝트 폴더 내에서 `npx husky install` 이 되지 않음.

- 종종 하나의 패키지안에 프론트와 서버를 같이 관리하는 경우가 있다. 처음에는 각각의 폴더에 husky를 적용하려고 했는데 이는 잘못된 방법이다. husky는 git hook 사용을 도와주는 라이브러리다. 즉 각각의 폴더에서 적용할 수 없다. 그래서 전체 패키지에서 설치를 하고 내부적으로 명령어를 이용해서 프론트, 서버에 접근해야 한다. 아래와 같이 말이다.

  ```json
    "scripts": {
      "prepare": "husky install",
      "test": "cd client && yarn test:clean && cd../server && yarn test:clean",
      "lint": "cd client && yarn lint && cd../server && yarn lint",
      "lint:fix": "cd client && yarn lint:fix && cd../server && yarn lint:fix",
      "lint-staged": "cd client && yarn lint-staged && cd../server && yarn lint-staged"
    },
  ```

- 해봤는데 안돼서 포기
