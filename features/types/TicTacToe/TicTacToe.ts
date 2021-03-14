export type CellId = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' 
type Cell = {
    id: CellId
    value: null | 'x' |'o'
}

export type State = {
    board: Record<CellId, Cell>
}