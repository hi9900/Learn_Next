import { create, StateCreator } from 'zustand'
import { devtools } from 'zustand/middleware'

export interface CountState {
  count: number
  increaseCount: () => void
  decreaseCount: () => void
}

const counterStore: StateCreator<CountState, [['zustand/devtools', never]]> = (
  set,
) => ({
  count: 0,
  increaseCount: () => set((state) => ({ count: state.count + 1 })),
  decreaseCount: () => set((state) => ({ count: state.count - 1 })),
})

// 프로덕션 환경에서는 DevTools를 비활성화합니다.
const useCounter =
  process.env.NODE_ENV === 'production'
    ? create<CountState>(counterStore)
    : create(devtools(counterStore, { name: 'CounterStore' }))

export default useCounter
