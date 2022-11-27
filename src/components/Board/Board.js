import Row from '../Row';
import { getUid } from '../../utils/random';
import { useState } from 'react';

import './Board.css';

const Board = () => {
  const rows = [];
  const game = useState([
    ['♜', '♞', '♝' , '♛', '♚', '♝','♞','♜'],
    ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
    ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖'],
  ])

  for (let i = 0; i < 8; i++){
    rows.push(<Row gState = {game} key = {getUid()} rowIndex = {i}/>);
  }

  return <div className='game_board'>
      { rows }
    </div>
}

export default Board;