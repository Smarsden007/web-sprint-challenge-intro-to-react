import React, { useEffect, useState } from 'react';
import App from '../App';
import styled from 'styled-components';

export default function Details(props)





{
    return(
        <div>
            <h2>Details of {props.name}</h2>
            <p>Born in year: {props.birth_year}</p>
            <p>Eye Color: {props.eye_color}</p>
            <p>Hair Color: {props.hair_color}</p>


            <button onClick={props.closeDetails}>Close</button>
        </div>
    )
}