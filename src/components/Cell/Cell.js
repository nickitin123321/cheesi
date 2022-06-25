import './Cell.css';
import Figure from '../Figure'

const Cell = ({color, rowIndex, cellIndex}) => {
  let figure;

  if( rowIndex === 1 || rowIndex === 6) {
    figure = <Figure figureType={'pawn'}/>
  }

  if((rowIndex === 0 || rowIndex === 7) &&
   (cellIndex === 0 || cellIndex === 7)) {
    figure = <Figure figureType={'rook'}/>
  }

  return <div
  className = 'row_cell'
  style={ {background: color} }>
    {figure}
</div>
}

export default Cell;