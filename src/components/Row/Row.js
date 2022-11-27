import Cell from '../Cell'
import { getUid } from '../../utils/random';

import './Row.css';

const Row = ({rowIndex, gState}) => {
  const cells = []

  for (let i = 0; i < 8; i++){
    cells.push(
    <Cell key = {getUid()} gState={gState} color ={ (rowIndex + i ) % 2 === 0  ? 'white' : 'lightgrey'}
    rowIndex={rowIndex} cellIndex={i}/>)
  }

  return <div className = 'board_row'>
    { cells }
  </div>
}

export default Row;