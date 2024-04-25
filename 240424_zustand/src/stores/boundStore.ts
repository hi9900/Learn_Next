import { StateCreator, create } from 'zustand'
import { devtools } from 'zustand/middleware'

const enum BoundActions {
  ADD_BEAR = 'bear/AddBear',
  EAT_FISH = 'fish/EatFish',
  ADD_FISH = 'fish/AddFish',
}

interface BearSlice {
  bears: number
  addBear: () => void
  eatFish: () => void
}

interface FishSlice {
  fishes: number
  addFish: () => void
}

interface SharedSlice {
  addBoth: () => void
  getBoth: () => void
}

const createBearSlice: StateCreator<
  BearSlice & FishSlice,
  [['zustand/devtools', never]],
  [],
  BearSlice
> = (set) => ({
  bears: 0,
  addBear: () =>
    set((state) => ({ bears: state.bears + 1 }), false, BoundActions.ADD_BEAR),
  eatFish: () =>
    set(
      (state) => ({ fishes: state.fishes - 1 }),
      false,
      BoundActions.EAT_FISH,
    ),
})

const createFishSlice: StateCreator<
  BearSlice & FishSlice,
  [['zustand/devtools', never]],
  [],
  FishSlice
> = (set) => ({
  fishes: 0,
  addFish: () =>
    set(
      (state) => ({ fishes: state.fishes + 1 }),
      false,
      BoundActions.ADD_FISH,
    ),
})

const createSharedSlice: StateCreator<
  BearSlice & FishSlice,
  [['zustand/devtools', never]],
  [],
  SharedSlice
> = (set, get) => ({
  addBoth: () => {
    get().addBear()
    get().addFish()
  },
  getBoth: () => get().bears + get().fishes,
})

type BoundSlice = BearSlice & FishSlice & SharedSlice

const useBoundStore = create<BoundSlice>()(
  devtools(
    (...a) => ({
      ...createBearSlice(...a),
      ...createFishSlice(...a),
      ...createSharedSlice(...a),
    }),
    { name: 'BoundStore', enabled: !!(process.env.NODE_ENV !== 'production') },
  ),
)

export default useBoundStore
