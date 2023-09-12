## dependencies vs devDependencies

- `npm install [라이브러리]`: dependencies로 해당 라이브러리가 들어간다.

- `npm install [라이브러리] --save-dev` or `npm install [라이브러리] -D`: 해당 라이브러리는 devDependencies 안으로 속하게 된다.

dependencies 안에 속한 라이브러리는 배포시에 포함되고, devDependencies는 포함되지 않는다

빌드 시간도 줄이고, 배포 시 굳이 올라가지 않아도 되는 불필요한 라이브러리를 제외할 수 있다.

단순히 개발할 때 필요하다면, devDependencies안에 속할 수 있게 명령어를 작성하고, 아니라면 일반적으로 설치한다.
