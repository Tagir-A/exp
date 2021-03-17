import { notReachable } from 'app/types'
import { useState } from 'react'

import { State, CellId } from '../TicTacToe'

const BOARD_SIZE = 3

const intDivision = (dividend: number, divisor: number) => Math.trunc(dividend / divisor)

function checkForWinner(state: State): 'x' | 'o' | null {
  const { board } = state
  const rows = [0, 0, 0]
  const cols = [0, 0, 0];
  const diags = [0, 0]

  for (const cell of Object.values(board)) {
    const cellRow = intDivision(Number(cell.id), BOARD_SIZE)
    const cellCol = Number(cell.id) % BOARD_SIZE
    const cellDiag = cellRow === cellCol ? 0 : cellRow + cellCol + 1
      === BOARD_SIZE ? 1 : null

    if (cell.value === 'x') {
      rows[cellRow]++
      cols[cellCol]++
      if (cellDiag !== null) diags[cellDiag]++
    }
    if (cell.value === 'o') {
      rows[cellRow]--
      cols[cellCol]--
      if (cellDiag !== null) diags[cellDiag]--
    }
  }

  // return winner if any
  if (rows.includes(BOARD_SIZE) || cols.includes(BOARD_SIZE) || diags.includes(BOARD_SIZE)) return 'x'
  if (rows.includes(BOARD_SIZE * -1) || cols.includes(BOARD_SIZE * -1) || diags.includes(BOARD_SIZE * -1)) return 'o'
  return null
}

const initState: State = {
  type: 'in_progress',
  board: {
    '0': { id: '0', value: null },
    '1': { id: '1', value: null },
    '2': { id: '2', value: null },
    '3': { id: '3', value: null },
    '4': { id: '4', value: null },
    '5': { id: '5', value: null },
    '6': { id: '6', value: null },
    '7': { id: '7', value: null },
    '8': { id: '8', value: null },
  },
}

type HistoryState = {
  turnCount: number
}

type API = {
  state: State
  setNextSymbol: (id: CellId) => void
}

export const useTicTacToe = (): API => {
  const [state, setState] = useState<State>(initState)

  const historyState: HistoryState = Object.values(state.board).reduce(
    (acc, cell): HistoryState => {
      return cell.value ? { ...acc, turnCount: acc.turnCount + 1 } : acc
    },
    { turnCount: 0 }
  )

  const setNextSymbol = (id: CellId) => {
    // @ts-ignore
    setState((prevState) => {
      switch (prevState.type) {
        case 'start':
          return {
            ...prevState,
            type: 'in_progress',
            board: {
              ...prevState.board,
              [id]: {
                id,
                value: historyState.turnCount % 2 ? 'o' : 'x',
              },
            },
          }

        case 'in_progress': {
          const nextState = {
            ...prevState,
            board: {
              ...prevState.board,
              [id]: {
                id,
                value: historyState.turnCount % 2 ? 'o' : 'x',
              },
            },
          }
          if (historyState.turnCount > 4 && historyState.turnCount < 9) {
            const winner = checkForWinner(nextState)
            return winner ? { type: 'win', board: nextState.board, winner } : nextState
          }
          if (historyState.turnCount === 9) {
            const winner = checkForWinner(nextState)
            return winner ? { type: 'win', board: nextState.board, winner } : { type: 'draw', board: nextState.board }
          }
          return nextState
        }

        case 'win':
        case 'draw':
          // cannot set value after win or draw
          return prevState

        default:
          return notReachable(prevState)
      }
    })
  }

  return {
    state,
    setNextSymbol,
  }
}
