import logo from './logo.svg';
import { useEffect, useState} from 'react'
import './App.css';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/')
      .then(res => res.json())
      .then(data => setData(data))
  },[])
  

  return (
    <div className="App">
      <h1>{data}</h1>
    </div>
  );
}

export default App;
