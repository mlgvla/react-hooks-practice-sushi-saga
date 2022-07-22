import React, { useState } from "react"
import MoreButton from "./MoreButton"
import Sushi from "./Sushi"

function SushiContainer({ sushis, onEatSushi }) {
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
    </div>
  )
}

export default SushiContainer
