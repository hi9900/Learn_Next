'use client'

import useCounter from '@/stores/counter-store'

export default function Counter() {
  const count = useCounter((state) => state.count)
  const increaseCount = useCounter((state) => state.increaseCount)
  const decreaseCount = useCounter((state) => state.decreaseCount)

  return (
    <>
      <div>{count}</div>
      <button type="button" onClick={increaseCount}>
        + 1
      </button>
      <button type="button" onClick={decreaseCount}>
        - 1
      </button>
    </>
  )
}
