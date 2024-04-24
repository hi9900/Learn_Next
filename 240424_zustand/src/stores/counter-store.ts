import { create, StateCreator } from 'zustand'
import { devtools } from 'zustand/middleware'

const enum CounterActions {
  INCREASE = 'counter/increase',
  DECREASE = 'counter/decrease',
}

export interface CountState {
  count: number
  increaseCount: () => void
  decreaseCount: () => void
}

const counterStore: StateCreator<CountState, [['zustand/devtools', never]]> = (
  set,
) => ({
  count: 0,
  increaseCount: () =>
    set(
      (state) => ({ count: state.count + 1 }),
      false,
      CounterActions.INCREASE,
    ),
  decreaseCount: () =>
    set(
      (state) => ({ count: state.count - 1 }),
      false,
      CounterActions.DECREASE,
    ),
})

const useCounter = create(
  devtools(counterStore, {
    name: 'CounterStore',
    enabled: !!(process.env.NODE_ENV !== 'production'),
  }),
)

export default useCounter
