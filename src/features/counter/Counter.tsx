import React from 'react'
import { RootState } from 'src/app/store'
import { decrement, increment } from './counterSlice'
import { useAppSelector, useAppDispatch } from 'src/app/hooks'

const Counter: React.FC = () => {
  const count = useAppSelector((state: RootState) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <>
      <div>
        <button aria-label='Increment value' onClick={() => dispatch(increment())}>
          +
        </button>
        <span>{count}</span>
        <button aria-label='Decrement value' onClick={() => dispatch(decrement())}>
          -
        </button>
      </div>
    </>
  )
}

export default Counter
