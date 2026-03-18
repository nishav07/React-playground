import './App.css';
import Card from './tempFile/Card.jsx';
import Msgbox from './tempFile/Msgbox.jsx';
import Video from './Video.jsx';
import TodoList from './TodoList.jsx';
import LotteryGame from './LotteryGame.jsx';
import Lottery from './Lottery.jsx';
import { sum } from './helper.js';
import Form from './Form.jsx';
import Counter from './Counter.jsx';
import Jokes  from './Jokes.jsx';
function App() {

  let winCondition = (ticket) => {
    return  sum(ticket) === 15;
  }
  
  //passing fucntion as a props
  return (
   <>
   {/* <Form/> */}
   {/* <Counter></Counter> */}
   {/* <Lottery n={3} winningSum={15}/>    */}
   {/* <LotteryGame/> */}
   <Jokes></Jokes>
   </>
  )
}

export default App
