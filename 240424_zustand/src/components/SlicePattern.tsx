'use client'

import useBoundStore from '@/stores/boundStore'

export default function SlicePattern() {
  const bears = useBoundStore((state) => state.bears)
  const fishes = useBoundStore((state) => state.fishes)
  const addBear = useBoundStore((state) => state.addBear)
  const addBearAndFish = useBoundStore((state) => state.addBoth)
  return (
    <div>
      <h2>Number of bears: {bears}</h2>
      <h2>Number of fishes: {fishes}</h2>
      <button type="button" onClick={addBear}>
        Add a bear
      </button>
      <button type="button" onClick={addBearAndFish}>
        Add bear and fish
      </button>
    </div>
  )
}
