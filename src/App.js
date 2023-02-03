import logo from './logo.svg';
import './App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/button';
import Stack from 'react-bootstrap/Stack';
import { useEffect, useState } from 'react';


function App() {

  const keys = {
      'Q': "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
      'W': "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
      'E': "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
      'A': "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
      'S': "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
      'D': "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
      'Z': "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
      'X': "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
      'C': "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  };

  const pads = [
    [
      ['Q', "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"],
      ['W', "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"],
      ['E', "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"],
    ], [
    ['A', "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"],
    ['S', "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"],
    ['D', "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"],
    ], [
      ['Z', "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"],
      ['X', "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"],
      ['C', "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"]
    ]      
  ];

  const [name, setName] = useState ("");

  function escFunction(event){
    play (event.key);
  }

  useEffect (() => {
    document.addEventListener("keydown", escFunction, false);
    return () => {
      document.removeEventListener("keydown", escFunction, false);
    }
  });

  function play (key) {
    const audio = document.getElementById(key.toUpperCase());
    if (audio) {
      audio.play();
      setName (keys[key]);
    }
  }

  return (
    <div id="drum-machine">
      {
        pads.map((pads2) => {
          return (
            <div>{
              pads2.map ((pad) => {
                const id = "drum-pad-" + pad[0];
                const ida = pad[0];
                return (
                  <button onClick={() => {play(ida)}} id={id} key={id} className="drum-pad m-1 rounded-1">
                    {pad[0]}
                    <audio id={ida} className='clip' src={pad[1]}/>
                  </button>
                )
              })
            }</div>
          )
        })
      }

      <div id="display" className="bg-light border m-1">{name}</div>

    </div>
  );
}

export default App;
