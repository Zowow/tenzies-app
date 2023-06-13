import React from "react";
import "./style.css"
import Die from "./components/Die"
import {nanoid} from "nanoid"
import Confetti from "react-confetti";

function App() {

  //functions
  const startTimer = () => {
    setRunning(true);
  }

  const stopTimer = () => {
    setMinutes(0);
    setSeconds(0);
    setRunning(false);
  }

  const generateNewDice = () => {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid()
    }
  }

  const allNewDice = () => {
    const newDices = []
    for(let i = 0; i < 10; i++){
      newDices[i] = (generateNewDice())
    }
    return newDices
  }

  const rerollDice = () => {
    if(!tenzies){
      setDices(prevDice => {
        return prevDice.map(item => {
          return item.isHeld === true ? item : generateNewDice()
        })
      })
      setNumRolls(prevRoll => prevRoll + 1)
    }else{
      setTenzies(false)
      setDices(allNewDice())
      setNumRolls(0)
      startTimer()
    }
  }

  const holdDice = (id) => {
    setDices(prevDice => {
      return prevDice.map((item)=> {
        return item.id === id ? {...item, isHeld: !item.isHeld} : item
      })
    })
  }
  
  //end of functions

  const [dices, setDices] = React.useState(allNewDice())
  const [tenzies, setTenzies] = React.useState(false)
  const [numRolls, setNumRolls] = React.useState(0)
  const [minutes, setMinutes] = React.useState(0);
  const [seconds, setSeconds] = React.useState(0);
  const [running, setRunning] = React.useState(true);

  React.useEffect(() => {
    let intervalId;

    if (running) {
      intervalId = setInterval(() => {
        if (seconds < 59) {
          setSeconds((prevSeconds) => prevSeconds + 1);
        } else {
          setSeconds(0);
          setMinutes((prevMinutes) => prevMinutes + 1);
        }
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [running, seconds]);
  

  React.useEffect(()=> {
    const allHeld = dices.every(item => item.isHeld)
    const firstVal = dices[0].value
    const allSameValue = dices.every(item => item.value === firstVal)
    if(allHeld && allSameValue){
      setTenzies(true)
      console.log("You Won!")
      stopTimer()
    }
  },[dices])

  
  const dicesMap = dices.map(item => {
    return (<Die 
                dice={item} 
                key={item.id} 
                holdDice={() => holdDice(item.id)} 
            />)
  })

  return (
    <main>
      <div className="header">
        {tenzies && <Confetti height={550} width={550}/>}
        <h1>Tenzies</h1>
        <h3>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</h3>
        <div className="dice-setup">
          <span>Timer : {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</span>
          <span>Number of Rolls : {numRolls}</span>
        </div>
      </div>
      <div className="dice-container">
        {dicesMap}
      </div>
      <button 
        onClick={rerollDice} 
        className="roll">
        {tenzies ? "New Game" : "Roll"}
      </button>
    </main>
  );
}

export default App;
