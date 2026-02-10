import './App.css';
import Card from './Card';
import Msgbox from './Msgbox.jsx';

function App() {
  return (
   <>
    <Card heading="BOAT headphone" tags={["best gadget","Best Price"]} oldPrice={200} newPrice={49}/>
    <Card heading="NVIDIA GPus" tags={["fastest GPUs","Best price"]} oldPrice={200} newPrice={49}/>
   </>
  )
}

export default App
