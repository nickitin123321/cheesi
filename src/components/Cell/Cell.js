import Figure, {FIGURE_MAP, FIGURE_NAMES} from '../Figure';

import './Cell.css';

const choseFigure = ({name, rowIndex, cellIndex}) =>
FIGURE_MAP[name].index.row.includes(rowIndex) &&
FIGURE_MAP[name].index.cell.includes(cellIndex);

const Cell = ({color, rowIndex, cellIndex}) => {
  let figure

  FIGURE_NAMES.forEach((name) =>{
    if (choseFigure({rowIndex, cellIndex, name})){
      figure = <Figure name = {name} color = {rowIndex > 3 ? 'white' : 'black' }/>
    }
  })

  return <div
  className = 'row_cell'
  style={ {background: color} }>
    {figure}
</div>
}

export default Cell;