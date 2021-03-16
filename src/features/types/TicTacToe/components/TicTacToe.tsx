import { notReachable } from 'app/types'
import React from 'react'

import { useTicTacToe } from '../hooks/useTicTacToe'
import { CellId, State as TicTacToeState } from '../TicTacToe'

import styles from './TicTacToe.module.css'

const Board = ({ state, setNextSymbol }: { state: TicTacToeState, setNextSymbol: (id: CellId) => void }) => <div className={styles.board}>
  {Object.values(state.board).map((cell) => {
    return <div key={cell.id} className={styles.cell} onClick={() => setNextSymbol(cell.id)}>
      {cell.value}
    </div>
  })}
</div>

export const TicTacToe = () => {
  const { state, setNextSymbol } = useTicTacToe()

  switch (state.type) {
    case 'start':
      return (
        <Board state={state} setNextSymbol={setNextSymbol} />
      )
    case 'in_progress':
      return (
        <Board state={state} setNextSymbol={setNextSymbol} />
      )
    case 'win':
      return (<>
        <Board state={state} setNextSymbol={setNextSymbol} />
        <div>And the winner is {state.winner}</div>
      </>
      )
    case 'draw':
      return (<>
        <Board state={state} setNextSymbol={setNextSymbol} />
        <div>It&apos;s a draw</div>
      </>
      )
    default:
      return notReachable(state)
  }

}


