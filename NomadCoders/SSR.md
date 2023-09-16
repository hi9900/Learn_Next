## getServerSideProps

- page에서 서버 측 랜더링 함수인 getServerSideProps함수를 export하는 경우 Next.js는 getServerSideProps에서 반환된 데이터를 사용하여 각 request에서 이 페이지를 pre-render합니다.

  getServerSideProps는 서버 측에서만 실행되며 브라우저에서는 실행되지 않습니다.

  https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props

- getServerSideProps를 사용하여 request시 데이터 fetch하기

  다음 예는 request 시 데이터를 fetch하고 결과를 pre-render하는 방법을 보여줍니다.

  (fetch할 때 오류 뜨시는 분들은 https를 http로 바꿔주시면 됩니다.)

```js
export default function Home({ data }) {
  // 데이터 랜더링
}

// 매 request마다 실행됩니다.
export async function getServerSideProps() {
  const res = await fetch(`https://.../data`);
  const data = await res.json();

  // props를 통해 page에 data전달
  return { props: { data } };
}
```

https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props#using-getserversideprops-to-fetch-data-at-request-time

getServerSideProps (타입스크립트와 함께 사용하기)
https://nextjs.org/docs/api-reference/data-fetching/get-server-side-props#getserversideprops-with-typescript

---

## App router

- next 13.4 버전 기준으로 getServerSideProps 대신에 fetch에 옵션 값('no-store')을 주어 SSR을 구현할 수 있습니다.

  (기존 getServerSideProps는 레거시가 되었다고 합니다.)

```js
async function fetchData() {
  const res = await fetch('http://localhost:3000/api/movies', {
    cache: 'no-store',
  })
  const { results } = await res.json()
  return results
}

export default async function Home() {
  const results = await fetchData()
  return (
    <div>
      {results?.map((movie: any) => (
        // 코드 동일
      ))}
    </div>
  )}
```
