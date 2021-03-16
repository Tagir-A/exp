export type CellId = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8'

type EmptyCell = {
  id: CellId
  value: null
}
type FilledCell = {
  id: CellId
  value: 'x' | 'o'
}

export type State = {
  type: 'start', board: Record<CellId, EmptyCell>
} | {
  type: 'in_progress'
  board: Record<CellId, EmptyCell | FilledCell>
} | {
  type: 'win',
  board: Record<CellId, EmptyCell | FilledCell>,
  winner: 'x' | 'o'
}
  | {
    type: 'draw',
    board: Record<CellId, FilledCell>,
  }