import React, { useState } from "react"

function MoneyForm({ onAddMoney }) {
  const [money, setMoney] = useState("")

  function handleSubmitForm(e) {
    e.preventDefault()
    onAddMoney(money)
    setMoney("")
  }

  console.log(money)
  return (
    <div className="money-form">
      <form onSubmit={handleSubmitForm}>
        <input
          type="text"
          id="money-input"
          placeholder="add amount"
          value={money}
          onChange={(e) => setMoney(e.target.value)}
        />
        <input type="submit" value="Add Money" />
      </form>
    </div>
  )
}

export default MoneyForm
