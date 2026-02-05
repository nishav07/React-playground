import './App.css'

function Navbar() {
  return (
    <>
    <div id="navbar">
      <div id="logo"><h1>React</h1></div>
      <div id='menu'>
        <a href="#">menu</a>
        <a href="#">bro</a>
      </div>
    </div>
    </>
  )
}

function App() {
  return (
    <>
    <Navbar/>
      <h1>hello world</h1>
      <button id='b'>Button</button>
    </>
  )
}



export default App
