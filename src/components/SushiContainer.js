import React, { useState } from "react"
import MoneyForm from "./MoneyForm"
import MoreButton from "./MoreButton"
import Sushi from "./Sushi"

function SushiContainer({ sushis, onEatSushi, onAddMoney }) {
  const [startingIndex, setStartingIndex] = useState(0)

  const sushiToDisplay = sushis
    .slice(startingIndex, startingIndex + 4)
    .map((sushi) => (
      <Sushi key={sushi.id} sushi={sushi} onEatSushi={onEatSushi} />
    ))

  function handleMoreSushiClick() {
    setStartingIndex((startingIndex) => (startingIndex + 4) % sushis.length)
  }

  return (
    <div className="belt">
      {sushiToDisplay}
      <MoreButton moreSushiClick={handleMoreSushiClick} />
      <MoneyForm onAddMoney={onAddMoney}/>
    </div>
  )
}

export default SushiContainer
