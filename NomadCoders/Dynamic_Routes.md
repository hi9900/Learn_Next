## Dynamic Routes

- Next.js에서는 page에 대괄호(`[param]`)를 추가하여 Dynamic Route를 생성할 수 있습니다.

  `/movies/1`, `/movies/abc` 등과 같은 모든 경로는 `pages/movies/[id].js`와 일치합니다.

```js
const router = useRouter();
const { id } = router.query;
```

https://nextjs.org/docs/routing/dynamic-routes

## Catch all routes

- 대괄호 안에 세 개의 점(...)을 추가하여 모든 경로를 포착하도록 Dynamic Routes를 확장할 수 있습니다.

  `pages/movies/[...id].js`는 `/movies/1`와 일치하지만 `/movies/1/2`, `/movies/1/ab/cd` 등과도 일치합니다.

  일치하는 매개변수는 페이지에 쿼리 매개변수로 전송되며 항상 배열이므로 `/movies/a` 경로에는 다음 쿼리 개체가 있습니다.

  `ex) { "id": ["a"] }`

  https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes

## router.push(url, as, options)

- 클라이언트 측 전환을 처리합니다.

  이 방법은 next/link가 충분하지 않은 경우에 유용합니다.

  url: UrlObject | String: 탐색할 URL

  as: UrlObject | String: 브라우저 URL 표시줄에 표시될 경로에 대한 선택적 데코레이터입니다.

```js
router.push({
  pathname: "/post/[pid]",
  query: { pid: post.id },
});
```

- 외부 URL에 대해서는 router.push()를 사용할 필요가 없습니다.

  window.location을 사용하는 것이 더 적합합니다.

  https://nextjs.org/docs/api-reference/next/router#routerpush

> Movie Detail API
>
> API: https://api.themoviedb.org/3/movie/{movie_id}?api_key=api_key&language=en-US

https://developers.themoviedb.org/3/movies/get-movie-details
