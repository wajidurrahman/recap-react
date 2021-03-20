import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const nayoks=[
    {name:'Jasim', age:56}, 
    {name:'Depjol', age:61}, 
    {name:'BappaRaz', age: 15}, 
    {name:'Omar Sani', age:67}, 
    {name:'Alomgir', age:66}
  ];

  return (
    <div className="App">
      <MovieCounter></MovieCounter>
      {
        nayoks.map(nk => <Nayok name={nk.name} age={nk.age}></Nayok>)
      }
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
      <MovieDisplay movies={count}></MovieDisplay>
      <MovieDisplay movies={count + 5}></MovieDisplay>
      <MovieDisplay movies={count + 11}></MovieDisplay>
    </div>
  )
}

function MovieDisplay (props){
  return <h4>Movies I have acted: {props.movies}</h4>
}

function Nayok(props) {
  const nayokStyle={
    border:'2px solid purple',
    margin:'20px'
  }
  return (
    <div style={nayokStyle}>
      <h1> Ami Nayok-{props.name} </h1>
      <h3>I have done 5 movies in {props.age || 30} years</h3>
    </div>
  )
}

export default App;
