import {
    Button,
    Card,
    CardBody,
    CardSubtitle,
    CardTitle,
} from "reactstrap";
import React, {useEffect, useState} from "react";

import axios from "axios"

const PersonCard = props => {
const [item, setItem] = useState([]);
useEffect(()=> {
  
  axios.get(`${props}`)
  .then(response => {
    setItem(response.data.results)
    console.log(response.data.results)
    //console.log(response.data)
  })
  .catch(error =>{
    console.log("There is an error in the Axios call: ", error)
  })
},[]);


console.log(props);
    return (
      <Card className="Card">
        <CardBody className="card-body">
        <CardSubtitle>Name: {props.name}</CardSubtitle><br></br>
        <CardSubtitle>Height: {props.height} inches</CardSubtitle><br></br>
        <CardSubtitle>Gender: {props.gender}</CardSubtitle><br></br>
        <CardSubtitle>created: {props.created}</CardSubtitle>
        
        </CardBody>
      </Card>
    );
};

  export default PersonCard;
