import './Figure.css';

export const FIGURE_MAP = {
  pawn: {
    index: { row: [1, 6],  cell: [...Array(8).keys()]},
    black: {icon:  '♟'},
    white: {icon: '♙'},
  },
  rook:  {
    index: { row: [0, 7], cell: [0, 7] },
    black: {icon:  '♜'},
    white: {icon: '♖'},
  },
  queen:  {
    index: { row: [0, 7], cell: [3] },
    black: {icon:  '♛'},
    white: {icon: '♕'},
  },
  knight:  {
    index: { row: [0, 7], cell: [1, 6] },
    black: {icon:  '♞'},
    white: {icon: '♘'},
  },
  bishop:  {
    index: { row: [0, 7], cell: [2, 5] },
    black: {icon:  '♝'},
    white: {icon: '♗'},
  },
  king:  {
    index: { row: [0, 7], cell: [4] },
    black: {icon:  '♚'},
    white: {icon: '♔'},
  },
};

export const FIGURE_NAMES =   Object.keys(FIGURE_MAP);

const Figure = ({name, color}) =>
  <div className = {`cell_figure cell_figure-${name}`}>
    {FIGURE_MAP[name][color].icon}
  </div>

export default Figure;