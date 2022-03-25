import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Character from "./components/Character";
import styled from "styled-components";
import Details from "./components/Details";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [starFolk, setStarFolk] = useState([]);

  // creating close button below

  const [buttonOpen, setButtonOpen] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const openDetails = (id) => {
    const character = starFolk.filter((item) => item.id === id);
    setButtonOpen(character);
  };

  const closeDetails = () => {
    setButtonOpen(null);
  };

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people`)
      .then((res) => {
        console.log("### res.data", res.data);
        

        const characters = res.data.results;

        let id = 1;
        characters.forEach((item) => (item.id = id++));
        // console.log(characters);
        setStarFolk(characters);
      })
      .catch((err) => {
        console.error(err);
      });
    //  I beleive I need to insert a .catch here>?
  }, []);

  /// the array needs to remain emtpy.

  const StarDiv = styled.div`
    margin: 0 auto;
    box-sizing: border-box;
    width: 65%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `;

  // console.log("### starFolk", starFolk);
  // console.log("### starFolk.type", typeof starFolk);
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <StarDiv>
        {starFolk &&
          starFolk.map((info) => {
            return (
              <>
              
                <Character
                  key={info.name}
                  info={info}
                  openDetails={openDetails}
                  closeDetails={closeDetails}
                />
                
                {buttonOpen && (
                  <Details
                  key={info.name}
                    props={info}
                    info={buttonOpen}
                    closeDetails={closeDetails}
                  />
                )}
              </>
            );
          })}
      </StarDiv>
    </div>
  );
};

export default App;


