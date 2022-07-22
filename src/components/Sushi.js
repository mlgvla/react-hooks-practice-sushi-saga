import React from "react"

function Sushi({ sushi, onEatSushi }) {
  const { name, img_url, price, isEaten } = sushi

  function handleSushiClick() {
    if (isEaten) {
      alert("You already ate the sushi!")
    } else {
      onEatSushi(sushi)
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleSushiClick}>
        {!isEaten && <img src={img_url} alt={name} width="100%" />}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi
