import './App.css';
import Card from './tempFile/Card.jsx';
import Msgbox from './tempFile/Msgbox.jsx';


function App() {
  return (
   <>
    <Card heading="BOAT headphone" tags={["best gadget","Best Price"]} oldPrice={200} newPrice={49}/>
    <Card heading="Rishav enterprises" tags={["fastest Humans","Best price"]} oldPrice={1000} newPrice={999}/>
   </>
  )
}

export default App
