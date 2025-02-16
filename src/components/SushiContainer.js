import React, { useState } from "react"
import MoreButton from "./MoreButton"
import Sushi from "./Sushi"

function SushiContainer({ sushis, onEatSushi }) {
  const [startingIndex, setStartingIndex] = useState(0)

  const currentSushis = sushis
    .slice(startingIndex, startingIndex + 4)
    .map(sushi => (
      <Sushi key={sushi.id} sushi={sushi} onEatSushi={onEatSushi} />
    ))

  function handleMoreSushi() {
    setStartingIndex(startingIndex => (startingIndex + 4) % sushis.length)
  }

  return (
    <div className="belt">
      {currentSushis}
      <MoreButton onMoreSushi={handleMoreSushi} />
    </div>
  )
}

export default SushiContainer
