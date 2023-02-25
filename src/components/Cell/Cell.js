
import './Cell.css';

const blackFigures = ['♟', '♜', '♞', '♝', '♛', '♚']
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

let curFigure = ''
let isWhiteTurn = true
let curPos = null

const isBlack = (figure) => blackFigures.includes(figure)

const Cell = ({color, rowIndex, cellIndex, gState, hState}) => {
  const [g, setG] = gState;
  const [hArr, setHArr] = hState;

  const movable = hArr.some(({cell, row}) => cell === cellIndex && row === rowIndex)

  return <div
    className = 'row_cell'
    onClick = {movable ?
      () => setG((prev) => {
        const newState = [...prev]
        const [curRow, curCell]= curPos
        newState[curRow][curCell] = ''
        newState[rowIndex][cellIndex] = curFigure

        isWhiteTurn = !isWhiteTurn
        setHArr([])
        return newState
      })
      :
      () => {
        const figure = g[rowIndex][cellIndex];
        const isBlackFigure = isBlack(figure);

        if(((isBlackFigure && !isWhiteTurn) || (!isBlackFigure && isWhiteTurn))
          && figure
          ){
          curFigure = figure
          //TODO figure move limit
          switch (figures[figure]) {
            case 'pawn':
              setHArr([{cell: cellIndex, row: rowIndex + (isBlackFigure ? 1 : -1)}])
              break;
            case 'knight': {
              const move = rowIndex + (isBlackFigure ? 2 : -2)
              setHArr([{cell: cellIndex + 1, row: move}, {cell: cellIndex - 1, row: move}])
              break;
            }
            case 'rook': {
              const arr = [];
              for (let i = 1; i < 8; i++) {
                arr.push({cell: cellIndex, row: rowIndex - i});
                arr.push({cell: cellIndex, row: rowIndex + i});
                arr.push({cell: cellIndex - i, row: rowIndex});
                arr.push({cell: cellIndex + i, row: rowIndex});
              }
              setHArr(arr)
              break;
            }
            case 'bishop': {
              const arr = [];
              for (let i = 1; i < 8; i++) {
                arr.push({cell: cellIndex - i, row: rowIndex - i});
                arr.push({cell: cellIndex + i, row: rowIndex + i});
                arr.push({cell: cellIndex - i, row: rowIndex + i});
                arr.push({cell: cellIndex + i, row: rowIndex - i});
              }
              setHArr(arr)
              break;
            }
            case 'king': {
              const arr = [];
                arr.push({cell: cellIndex - 1, row: rowIndex});
                arr.push({cell: cellIndex + 1, row: rowIndex});
                arr.push({cell: cellIndex + 1, row: rowIndex + 1});
                arr.push({cell: cellIndex - 1, row: rowIndex - 1});
                arr.push({cell: cellIndex, row: rowIndex - 1});
                arr.push({cell: cellIndex - 1, row: rowIndex});
                arr.push({cell: cellIndex, row: rowIndex + 1});
                arr.push({cell: cellIndex + 1, row: rowIndex - 1});
                arr.push({cell: cellIndex - 1, row: rowIndex +1});
              setHArr(arr)
              break;
            }
            default:
              break;
              }
          curPos = [rowIndex, cellIndex]
        }
   }}
  style={ {background: movable ? 'yellowgreen' : color} }>
    <div className='cell_figure'>
      {g[rowIndex][cellIndex]}
    </div>
  </div>
}

export default Cell;