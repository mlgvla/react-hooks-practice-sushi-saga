import React, { useState } from "react"
import MoneyForm from "./MoneyForm"
import MoreButton from "./MoreButton"
import Sushi from "./Sushi"

function SushiContainer({ sushis, onEatSushi, onAddMoney}) {
  const [startingIndex, setStartingIndex] = useState(0)

  const sushiList = sushis
    .slice(startingIndex, startingIndex + 4)
    .map((sushi) => <Sushi key={sushi.id} sushi={sushi} onEatSushi={onEatSushi} />)

  function handleMoreButtonClick() {
    setStartingIndex((startingIndex) => (startingIndex + 4) % sushis.length)
  }
  return (
    <div className="belt">
      {sushiList}
      <MoreButton onMoreButtonClick={handleMoreButtonClick} />
      <MoneyForm onAddMoney={onAddMoney}/>
    </div>
  )
}

export default SushiContainer
