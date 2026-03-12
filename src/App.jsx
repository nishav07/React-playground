import './App.css';
import Card from './tempFile/Card.jsx';
import Msgbox from './tempFile/Msgbox.jsx';
import Video from './Video.jsx';
import TodoList from './TodoList.jsx';
import LotteryGame from './LotteryGame.jsx';

import Lottery from './Lottery.jsx';

function App() {

  
  return (
   <>
   <Lottery n={3} winningSum={18}/>
   {/* <LotteryGame/> */}
   </>
  )
}

export default App
