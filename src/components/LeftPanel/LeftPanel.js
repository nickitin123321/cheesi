import './LeftPanel.css';

const alpha = (count, offset) => Array.from(Array(count)).map((_, i) => String.fromCharCode(i + offset))

// Eng alphabet starts from 65 char code.
const engAlpha = alpha(8, 65)

const LeftPanel = () => {
  return <div className='leftPanel'>
    {engAlpha.reverse().map((char) => <div class='leftPanel_item'>{char}</div>)}
  </div>
}

export default LeftPanel