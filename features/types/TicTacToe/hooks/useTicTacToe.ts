import { useState } from "react"

import { State } from "../TicTacToe"

const initState: State = {
    board: [
        {id: '0', value: null},
        {id: '1', value: null},
        {id: '2', value: null},
        {id: '3', value: null},
        {id: '4', value: null},
        {id: '5', value: null},
        {id: '6', value: null},
        {id: '7', value: null},
        {id: '8', value: null},
    ]
}

export const useTicTacToe = (params) => {
    const [state, setState] = useState<State>(initState)
}
