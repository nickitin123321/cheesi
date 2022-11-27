import './LeftPanel.css';

const numberArr = [...Array(8).keys()].map((n)=> n + 1)

const LeftPanel = () => {
  return <div className='leftPanel'>
    {numberArr.reverse().map((num) => <div class='leftPanel_item'>{num}</div>)}
  </div>
}

export default LeftPanel