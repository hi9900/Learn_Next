# CSS module

- `*.module.css` 파일을 생성 및 관리

- js 파일에 import 후 className 지정

```js
import styles from "./*.module.css";

<div className={styles.test}>Test</div>;
```

- 2개 이상의 className 적용 방법

```js
// 1
<div className={`${styles.module} ${styles.test}`}>Test</div>;

// 2
<div className={[styles.module, styles.test].join(" ")}>Test</div>;
```
