import React, { useState } from "react"

function MoneyForm({onAddMoney}) {
  const [money, setMoney] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    onAddMoney(money)
    setMoney("")
  }

  function handleChange(e) {
    setMoney(e.target.value)
  }
 

  return (
    <div className="money-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="money-input"
          placeholder="add amount"
          value={money}
          onChange={handleChange}
        />
        <input type="submit" value="Add Money" />
      </form>
    </div>
  )
}

export default MoneyForm
