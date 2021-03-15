import React from 'react'

import { useTicTacToe } from '../hooks/useTicTacToe'

import styles from './TicTacToe.module.css'


export const TicTacToe = () => {
  const { state, setNextSymbol } = useTicTacToe()

  return (
    <div className={styles.board}>
      {Object.values(state.board).map((cell) => {
        return <div key={cell.id} className={styles.cell} onClick={() => setNextSymbol(cell.id)}>
          {cell.value}
        </div>
      })}
    </div>
  )
}
