import React from "react";
import styled from 'styled-components';

const StarStyle = styled.div`
display:flex;
justify-content:center`


const StarStyleBox = styled.div`
margin:
background-color:
border:
border-radius:
`


const Character = props => {
    const {info} = props
    return (
        <StarStyle>
            <h1>{info.name}</h1>
        </StarStyle>
        
    )
};


export default Character;