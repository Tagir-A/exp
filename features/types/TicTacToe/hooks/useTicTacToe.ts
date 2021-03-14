import { useState } from "react"

import { State, CellId } from "../TicTacToe"

const initState: State = {
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
    }
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

    const historyState: HistoryState = Object.values(state.board).reduce((acc, cell,): HistoryState => {
        console.log('history: ', cell)

        return cell.value ? { ...acc, turnCount: acc.turnCount + 1 } : acc
    }, { turnCount: 0 })
    const setNextSymbol = (id: CellId) => {
        setState(prevState => ({
            ...prevState, board: {
                ...prevState.board,
                [id]: {
                    id,
                    value: historyState.turnCount % 2 ? 'x' : 'o'
                }
            }
        }))
    }

    return {
        state,
        setNextSymbol
    }
}
