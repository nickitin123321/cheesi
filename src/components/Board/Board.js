import Row from '../Row';
import { getUid } from '../../utils/random';

import './Board.css';

const Board = () => {
  const rows = [];

  for (let i = 0; i < 8; i++){
    rows.push(<Row key = {getUid()} rowIndex = {i}/>);
  }

  return <div className='board'>
      { rows }
    </div>
}

export default Board;