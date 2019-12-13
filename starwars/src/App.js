import './App.css';

import React, {useEffect, useState} from "react";

import { Container } from "reactstrap";
import PersonCard from './components/Person';
import axios from 'axios';

const App = () => {
   const [data, setData] = useState([]);
  useEffect(()=>{
    axios.get('https://swapi.co/api/people/')
  .then(response => {
    setData(response.data.results)
    console.log(response.data.results)
  })
  .catch(error =>{
    console.log("There is an error in the Axios call: ", error)
  })
  },[])
  


  return (
    <div className="App">
    <Container>

     <h1 className="Header">React Wars</h1>
      
      <div className="entry">
      {data.map(data => {
        return (
          <PersonCard
            
            name={data.name}
            height={data.height}
            gender={data.gender}
            created={data.created}

          />
        );
      })}
      </div>
    </Container>
     
    </div>
  );
}

export default App;
