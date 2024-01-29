import { useState } from 'react';
import axios from 'axios';
import './App.css'; 

function App() {
  const [datas, setDatas] = useState('');

  const handleAdd = () => {
    axios.post('http://localhost:3001/add', { datas: datas })
      .then(result => {
        console.log(result);
        setDatas('');
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="app">
        <h2>Enter the data:</h2>
        <input
          type="text"
          value={datas}
          onChange={(e) => setDatas(e.target.value)}
        />
        <button type="button" onClick={handleAdd}>Click</button>
      </div>
    
  );
}

export default App;
