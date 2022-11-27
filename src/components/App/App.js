import './App.css';
import Board from '../Board';
import LeftPanel from '../LeftPanel/LeftPanel';
import BottomPanel from '../BottomPanel/BottomPanel';

function App() {
  return (
    <div className='app'>
      <LeftPanel/>
      <div className='container'>
        <Board/>
        <BottomPanel />
      </div>
    </div>
  );
}

export default App;
