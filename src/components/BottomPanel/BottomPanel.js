import { getUid } from '../../utils/random';
import './BottomPanel.css'

const alpha = (count, offset) => Array.from(Array(count)).map((_, i) => String.fromCharCode(i + offset))

// Eng alphabet starts from 65 char code.
const engAlpha = alpha(8, 65)

const BottomPanel = () => {
  return <div className='bottomPanel'>
    {engAlpha.map((char) => <div key={getUid()} className='bottomPanel_item'>{char}</div>)}
  </div>
}

export default BottomPanel