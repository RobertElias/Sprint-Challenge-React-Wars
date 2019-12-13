import {
    Button,
    Card,
    CardBody,
    CardSubtitle,
    CardTitle,
} from "reactstrap";
import React, { Component } from 'react'

import axios from "axios"

const PersonCard =(props) =>{
    
        return (
            <>
            <div>
            <p>Name: {props.name}</p>
            <p>Height: {props.height}</p>
            <p>Gender: {props.gender}</p>
            <p>Created: {props.created}</p>
            </div>
            </>
           
        )
    
}

export default PersonCard
