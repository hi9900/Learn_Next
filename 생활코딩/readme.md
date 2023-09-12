# 설치와 실횅

## 설치

```bash
$ npx create-next-app@latest
```

### 설정

Typescript : No

ESLink : Yes

Tailwind CSS : Yes

src/ directory : Yes

App Router : Yes

import alias : No

## 실행

```bash
$ npm run dev
```

# 빌드와 배포

```bash
$ npm run build
$ npm run start
```

- build: `.next` 폴더에 배포 가능한 애플리케이션이 생성 됨

- start: `.next` 폴더의 내용을 바탕으로 서비스를 시작함

# 라우팅

- 용어 정리

  : 예를 들어, "http://a.com/dashboard/analytics/"라는 주소가 있을 때, "/dashboard/analytics/" 부분을 'path'라고 합니다. 그리고 'dashboard'와 'analytics'는 각각 'segment'라고 부릅니다.

- NextJS `src/app/page.js`의 값을 `layout.js`의 `{children}`에 담아서 내보낸다.

- app directory 내부에 endpoint 폴더 안 `page.js`에 컴포넌트를 생성

  만약 endpoint 폴더에 `layout.js`가 있다면, 그것과 결합

  없다면 app 폴더의 layout.js와 결합

# SPA(single page application)

- 하나의 페이지에서 모든 작업을 처리하는 앱을 의미합니다.

  서버로부터 가져올 데이터가 있다면 ajax와 같은 방법을 통해서 동적으로 로딩합니다.

  이것을 SPA(single page application)이라고 합니다.

  Link는 Next.js에서 SPA를 매우 쉽게 구현하도록 도와주는 도구입니다.

- 페이지 리로딩이 없어졌다.

- 방문한 페이지를 다운로드 받지 않는다.

- 미리 페이지를 다운로드 한다.

# 정적 자원 사용하기

- public 폴더에 이미지를 삽입

- `app/page.js`에서 `<img src="/hello.png" width="80" alt="" />`

# backend

- Next.js 는 백엔드까지 동시에 제공하는 full stack framework

  [Route Handlers](https://nextjs.org/docs/app/building-your-application/rendering/server-components#server-rendering-strategies)를 사용하면 별도의 백엔드를 구축하지 않고 Next js API 서버까지 구축할 수 있다.

- Json-server를 이용해서 간단하게 백엔드를 구축하고, 뒤에서 백엔드를 사용하는 방법을 알려드립니다.

## 절차

1. json-server 실행

```bash
$ npx json-server --port 9999 --watch db.json
```

2. db.json 파일 수정

```json
{
  "topics": [
    {
      "id": 1,
      "title": "html",
      "body": "html is .."
    },
    {
      "id": 2,
      "title": "css",
      "body": "css is .."
    }
  ]
}
```

3. http:localhost:9999/topics로 접속

4. 개발자 도구 Network 창에서 ESC키를 눌러서 콘솔창 열기

5. 글목록 읽기

```js
const resp = await fetch("http://localhost:9999/topics/");
const result = await resp.json();
console.log(result);
```

6. 글추가

```js
const resp = await fetch("http://localhost:9999/topics", {
  method: "POST",
  body: JSON.stringify({ title: "js", body: "js is ..." }),
  headers: {
    "content-type": "application/json",
  },
});
const result = await resp.json();
console.log(result);
```

7. 글 읽기

```js
const resp = await fetch("http://localhost:9999/topics/1");
const result = await resp.json();
console.log(result);
```

8. 글 수정

```js
const resp = await fetch("http://localhost:9999/topics/2", {
  method: "PATCH",
  body: JSON.stringify({ title: "css3", body: "css3 is ..." }),
  headers: {
    "content-type": "application/json",
  },
});
const result = await resp.json();
console.log(result);
```

9. 글 삭제

```js
const resp = await fetch("http://localhost:9999/topics/2", {
  method: "DELETE",
});
const result = await resp.json();
console.log(result);
```

# Server Component vs Client Component

## 서버 컴포넌트는 아래와 같은 경우에 사용합니다.

- 사용자와 상호작용하지 않는 경우

- 백엔드에 엑세스하면서 보안적으로 위험한 정보를 주고 받는 경우

## 클라이언트 컴포넌트는 아래와 같은 경우 사용합니다.

- 서버 컴포넌트로 해결되지 않는 경우

- 사용자와 상호작용하는 경우

- useEffect, useState, onClick, onChange와 같은 API를 사용해야 하는 경우

- useRouter, useParams와 같은 nextjs의 client component API를 사용하는 경우

## 서버사이드 렌더링

- 서버 컴포넌트는 모든 작업을 서버 쪽에서 처리하고, 그 결과인 html 코드만 클라이언트로 전송합니다.

  이것을 서버쪽에서 랜더링을 한다고해서 server side rendering이라고 합니다.

### 좋은 점

- 간결한 코드: useEffect와 useState와 같은 훅을 사용하지 않아도 되므로, 코드가 더 간결하고 이해하기 쉬워집니다.

  이로 인해 코드 유지 관리가 쉬워지고, 버그 발생 확률이 줄어들 수 있습니다.

- 빠른 데이터 엑세스: 데이터베이스와 같은 자원에 접근해야 하는 경우, 서버 컴포넌트는 서버와 데이터베이스가 가까운 위치에서 작동하므로, 더 빠른 속도로 필요한 데이터에 접근할 수 있습니다.

- 보안: 서버 컴포넌트는 클라이언트에 민감한 정보(예: 데이터베이스 비밀번호)를 전송하지 않습니다.

  이로 인해, 필요한 작업을 안전하게 처리하면서 동시에 클라이언트의 보안을 유지할 수 있습니다.

- 향상된 성능: 서버 컴포넌트는 클라이언트로 JavaScript 코드를 전송하지 않습니다.

  이는 전송되는 데이터의 양을 줄이고, 클라이언트의 부하를 줄임으로써 웹사이트의 전반적인 성능을 향상시키는데 도움이 됩니다.

# 생성 기능

## server component -> client component

```js
"use client";
```

위의 코드를 사용하면 client component로 전환됩니다.

클라이언트 컴포넌트가 되면 useEffect, useState, onSubmit과 같은 코드를 사용할 수 있게 됩니다.

## 라우터

```js
import { useRouter } from "next/navigation";
const router = useRouter();

router.push(`/read/${topic.id}`);
router.refresh();
```

- useRouter를 사용하면 라우터 객체를 생성할 수 있습니다. useRouter는 client component에서만 사용 가능합니다.

- router.push를 사용하면 페이지 리로드 없이 사용자의 화면을 해당 페이지로 이동합니다.

- router.refresh를 사용하면 서버 컴포넌트를 서버 쪽에서 다시 랜더링해서 새로 고침할 수 있습니다.

## cache 업데이트

- router.refresh를 했음에도 글 목록이 갱신되지 않을 것입니다.

  그 이유는 서버쪽에서 fetch를 사용하면 응답 결과를 저장하기 때문입니다.

  개발 서버를 다시 시작하고, 페이지를 리로드한 후에 터미널을 봅시다.

- cache : MISS는 캐쉬가 없기 때문에 서버에 실제로 접속해서 데이터를 가져왔다는 뜻입니다.

- cache : HIT 입니다. 캐쉬를 사용했다는 뜻입니다.

- 캐쉬를 삭제한 후에 router.refresh를 하면 됩니다만, 그건 수업의 범위를 벗어나기 때문에 fetch를 하는 단계에서 캐쉬를 사용하지 않는 방법을 보여드리겠습니다.

  자세한 내용은 [revalidate](https://nextjs.org/docs/app/building-your-application/data-fetching/revalidating)를 확인해주세요.

```js
const resp = await fetch("http://localhost:9999/topics/", {
  cache: "no-store",
});
```

- `{cache: 'no-store'}`를 추가하면 캐쉬를 사용하지 않게 됩니다.

  이제 layout.js의 fetch는 랜더링 될 때마다 캐쉬를 사용하지 않고 신선한 데이터를 가져오게 되었습니다.

# Control 컴포넌트

- server component 내에서는 현재 동적 라우팅의 값(`[id]`)을 layout 안에서는 알 수 없습니다.

  useParams를 사용해야 하는데 useParams는 client component입니다.

  app/layout.js 전체를 client component로 전환해도 됩니다만, server component의 이점을 포기하기는 싫기 때문에 여기서는 client component의 기능이 필요한 부분만 별도의 컴포넌트로 분리했습니다.

# Update 기능

- 수정 기능은 read + create 기능을 합친 것과 같습니다.

- read 페이지 캐슁 끄기

  수정을 한 후에 `/read/[id]`로 접속을 하면 내용이 갱신되지 않습니다. 여기서는 캐쉬 기능을 끄겠습니다.

# Delete 기능

```js
<input
  type="button"
  value="delete"
  onClick={() => {
    const options = { method: "DELETE" };
    fetch("http://localhost:9999/topics/" + id, options)
      .then((resp) => resp.json())
      .then((result) => {
        router.push("/");
        router.refresh();
      });
  }}
/>
```

# 환경 변수

- 코드에 포함시킬 수 없는 정보는 환경변수의 형태로 관리하는 것이 좋습니다.

1. `.env.local` 파일 생성

`NEXT_PUBLIC_` 접두사가 없으면 server component에서만 사용할 수 있고, client component에서는 사용할 수 없습니다. 이는 DB_PASSWORD와 같은 비밀정보를 보호하기 위한 안전장치입니다.

2. 환경변수는 process.env.변수명을 이용해서 가져올 수 있습니다.
