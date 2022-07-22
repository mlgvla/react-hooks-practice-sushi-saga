import React, { useState, useEffect } from "react"
import SushiContainer from "./SushiContainer"
import Table from "./Table"

const API = "http://localhost:3001/sushis"

function App() {
  const [sushis, setSushis] = useState([])
  const [wallet, setWallet] = useState(100)

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((sushis) => {
        const modifiedSushis = sushis.map((sushi) => {
          return { ...sushi, isEaten: false }
        })
        setSushis(modifiedSushis)
      })
  }, [])

  function handleEatSushi(eatenSushi) {
    if (eatenSushi.price <= wallet) {
      const updatedSushis = sushis.map((sushi) => {
        if (sushi.id === eatenSushi.id) {
          return { ...sushi, isEaten: true }
        } else {
          return sushi
        }
      })
      setSushis(updatedSushis)
      setWallet((wallet) => wallet - eatenSushi.price)
    } else {
      alert("Not enough cash.  Go to the ATM!!!")
    }
  }

  function handleAddMoney(money) {
    setWallet((wallet) => wallet + parseInt(money))
  }

  const eatenSushis = sushis.filter((sushi) => sushi.isEaten)
  return (
    <div className="app">
      <SushiContainer
        sushis={sushis}
        onEatSushi={handleEatSushi}
        onAddMoney={handleAddMoney}
      />
      <Table plates={eatenSushis} wallet={wallet} />
    </div>
  )
}

export default App
