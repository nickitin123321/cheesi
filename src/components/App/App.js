import './App.css';
import Board from '../Board';
import LeftPanel from '../LeftPanel/LeftPanel';

function App() {
  return (
    <div className='app'>
      <LeftPanel/>
      <Board/>
    </div>
  );
}

export default App;
