import {
    Button,
    Card,
    CardBody,
    CardSubtitle,
    CardTitle,
} from "reactstrap";
import React, { Component } from 'react'

import axios from "axios"

const PersonCard = props =>{

const [item, setItem] = useState([]);

useEffect(()=> {
    
})
    
        return (
            
            <Card className="Card">

            <CardBody className="card-body">
            <CardSubtitle>Name: {props.data.name}</CardSubtitle>
            <CardSubtitle>Height: {props.data.height}</CardSubtitle>
            <CardSubtitle>Gender: {props.data.gender}</CardSubtitle>
            <CardSubtitle>Created: {props.data.created}</CardSubtitle>
            </CardBody>
           
            </Card>

        )
    
}

export default PersonCard
