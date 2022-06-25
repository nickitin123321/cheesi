import Row from '../Row';
import './Board.css';

const Board = () => {
const rows = [];

for (let i = 0; i < 8; i++){
  rows.push(<Row rowIndex = {i}/>)
 }

 return <div className='board'>
    { rows.map((row)=> row) }
  </div>
}

export default Board;