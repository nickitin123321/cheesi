import './Figure.css';

const Figure = ({figureType}) =>
  <div className = {`cell_figure-${figureType}`}/>

export default Figure;