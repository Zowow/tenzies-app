import React from "react";
import "./style.css"
import Die from "./components/Die"
import {nanoid} from "nanoid"

function App() {

  //functions
  const allNewDice = () => {
    const newDices = []
    for(let i = 0; i < 10; i++){
      newDices[i] = ({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid()
      })
    }
    return newDices
  }

  const rerollDice = () => {
    setDices(allNewDice())
  }

  //end of functions
  const [dices, setDices] = React.useState(allNewDice())

  const dicesMap = dices.map(item => {
    return (<Die value={item.value} isHeld={item.isHeld} key={item.id} />)
  })

  return (
    <main>
      <div className="header">
        <h1>Tenzies</h1>
        <h3>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</h3>
      </div>
      <div className="dice-container">
        {dicesMap}
      </div>
      <button onClick={rerollDice} className="roll">Roll</button>
    </main>
  );
}

export default App;
