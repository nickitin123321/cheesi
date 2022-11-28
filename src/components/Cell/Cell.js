
import './Cell.css';

const whiteFigures = ['♟', '♜', '♞', '♝', '♛', '♚']
const figures = {
  '♟': 'pawn',
  '♜': 'rook',
  '♞': 'knight',
  '♝': 'bishop',
  '♛': 'queen',
  '♚': 'king',
  '♙': 'pawn',
  '♖': 'rook',
  '♘': 'knight',
  '♗': 'bishop',
  '♕': 'queen',
  '♔': 'king',
}

const Cell = ({color, rowIndex, cellIndex, gState, hState}) => {
  const [g, setG] = gState
  const [hArr, setHArr] = hState

  const movable = hArr.some(({cell, row}) => cell === cellIndex && row === rowIndex)

  return <div
    className = 'row_cell'
    onClick = {movable ?
      () => setG((prev) => {
        const figure = prev[rowIndex - 1][cellIndex]
        const arr = [...prev]
        const move = rowIndex - 1 + (whiteFigures.includes(figure) ? 1 : -1)

        if(figure && figures[figure] === 'pawn'){
          arr[rowIndex - 1][cellIndex] = ''
          arr[move][cellIndex] = figure
        }

        return arr
      })
      :
      () => {
        const figure = g[rowIndex][cellIndex]

        if(figure && figures[figure] === 'pawn'){
          const move = rowIndex + (whiteFigures.includes(figure) ? 1 : -1)
          setHArr([{cell: cellIndex, row: move}])
        }
   }}
  style={ {background: movable? 'yellowgreen' : color} }>
    <div className='cell_figure'>
      {g[rowIndex][cellIndex]}
    </div>
  </div>
}

export default Cell;