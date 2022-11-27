import { getUid } from '../../utils/random';
import './LeftPanel.css';

const LeftPanel = () => {
  return <div className='leftPanel'>
    {[8, 7, 6, 5, 4, 3, 2, 1].map((num) => <div key ={getUid()} className='leftPanel_item'>{num}</div>)}
  </div>
}

export default LeftPanel