import React from "react"

function Sushi({ sushi, onEatSushi }) {
  const { id, name, img_url, price, eaten } = sushi

  function handlePlateClick() {
    !eaten ? onEatSushi(sushi) : alert("You already ate the sushi!")
  }
  return (
    <div className="sushi">
      <div className="plate" onClick={handlePlateClick}>
        {eaten ? null : <img src={img_url} alt={name} width="100%" />}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi
