import React, { useState } from "react"
import MoreButton from "./MoreButton"

function SushiContainer({ sushis }) {
  const [startingIndex, setStartingIndex] = useState(0)
  const currentSushis = sushis
    .slice(startingIndex, startingIndex + 4)
    .map(sushi => console.log(sushi))
  // this will have a changing index after the more button is clicked
  // right now I'm just hard coding the first 4 sushis
 
  function handleMoreSushi() {
    setStartingIndex(startingIndex => (startingIndex + 4) % sushis.length)
    console.log("in more sushi", startingIndex)
  }

  return (
    <div className="belt">
      {currentSushis}
      <button onClick={handleMoreSushi}>Test Button</button>
      <MoreButton />
    </div>
  )
}

export default SushiContainer
