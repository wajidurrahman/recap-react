import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const nayoks=['Jasim', 'Depjol', 'BappaRaz']
  return (
    <div className="App">
      <MovieCounter></MovieCounter>
      <Nayok name={nayoks} age="20"></Nayok>
      <Nayok name="Sakib Khan"></Nayok>
      <Nayok name={nayoks}></Nayok>
      <Nayok></Nayok>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

function MovieCounter(){
  const [count, setCount] = useState(0);
   
  const handleClick = () => setCount(count + 1);

  return(
    <div>
      <button onClick={handleClick}>Add Movie</button>
      <h5>Number of movies:{count}</h5>
    </div>
  )
}

function Nayok(props) {
  const nayokStyle={
    border:'2px solid purple',
    margin:'20px'
  }
  return (
    <div style={nayokStyle}>
      <h1> Ami Nayok-{props.name} </h1>
      <h3>I have done 5 movies{props.age || 30}</h3>
    </div>
  )
}

export default App;
