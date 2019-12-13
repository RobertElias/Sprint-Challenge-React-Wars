import './App.css';

import React from 'react';
import axios from 'axios';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

//const [data, setData] = useState([]);

  axios.get('https://swapi.co/api/people/')
  
  .then(response => {
   
 
    //setData(response.data.results)
    console.log(response.data.results)
    //console.log(response.data)
  })
  .catch(error =>{
    console.log("There is an error in the Axios call: ", error)
  })


  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
    </div>
  );
}

export default App;
