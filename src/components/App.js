import React, { useEffect, useState } from "react"
import SushiContainer from "./SushiContainer"
import Table from "./Table"

const API = "http://localhost:3001/sushis"

function App() {
  const [sushis, setSushis] = useState([])
  const [wallet, setWallet] = useState(100)

  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(sushis => {
        const modifiedSushis = sushis.map(sushi => {
          return { ...sushi, eaten: false }
        })
        setSushis(modifiedSushis)
      })
  }, [])

  function handleEatSushi(eatenSushi) {

    if (eatenSushi.price <= wallet) {
      const updatedSushis = sushis.map(sushi => {
        if (sushi.id === eatenSushi.id) return { ...sushi, eaten: true }
        else return sushi
      })
      setSushis(updatedSushis)
      setWallet(wallet => wallet - eatenSushi.price)
    } else {
      alert("You don't have enough money!")
    }
  }

  // const eatenSushis - array sushis with eaten: true

  const eatenSushis = sushis.filter((sushi) => sushi.eaten === true)

  return (
    <div className="app">
      <SushiContainer sushis={sushis} onEatSushi={handleEatSushi} />
      <Table wallet={wallet} plates={eatenSushis} />
    </div>
  )
}

export default App
