import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .then(response => setData(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="App">
      {console.log(data)}
    </div>
  );
}

export default App;
