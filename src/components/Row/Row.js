import Cell from '../Cell'
import './Row.css';

const Row = ({rowIndex}) => {
  const cells = []

  for (let i = 0; i < 8; i++){
    cells.push(
    <Cell color ={ (rowIndex + i ) % 2 === 0  ? 'white' : 'black'}
    rowIndex={rowIndex} cellIndex={i}/>)
  }

  return <div className = 'board_row'>
    { cells.map((cell) => cell) }
  </div>
}

export default Row;