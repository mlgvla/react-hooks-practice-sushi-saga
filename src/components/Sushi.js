import React, { useState } from "react"

function Sushi({ sushi }) {
  const { id, name, img_url, price } = sushi

  const [isThereSushi, setIsThereSushi] = useState(true)

  function handlePlateClick() {
    setIsThereSushi(isThereSushi => !isThereSushi)
  }
  return (
    <div className="sushi">
      <div className="plate" onClick={handlePlateClick}>
        {!isThereSushi ? null : <img src={img_url} alt={name} width="100%" />}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi
