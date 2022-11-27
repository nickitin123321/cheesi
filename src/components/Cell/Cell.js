
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

const Cell = ({color, rowIndex, cellIndex, gState}) => {
  const [g, setG] = gState

  return <div
  className = 'row_cell'
  onClick = {() => setG((prev) => {
    const figure = prev[rowIndex][cellIndex]
    const arr = [...prev]

    if(figure && figures[figure] === 'pawn'){
      arr[rowIndex][cellIndex] = ''
      arr[rowIndex + (whiteFigures.includes(figure) ? 1 : -1) ][cellIndex] = figure
    }

    // if(figure && figures[figure] === 'queen'){
    //   arr[rowIndex][cellIndex] = ''
    //   arr[rowIndex + (whiteFigures.includes(figure) ? 7 : -7) ][cellIndex] = figure
    // }

    return arr
  })}
  style={ {background: color} }>
    <div className='cell_figure'>
      {g[rowIndex][cellIndex]}
    </div>
  </div>
}

export default Cell;