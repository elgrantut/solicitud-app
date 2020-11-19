import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Balance = () => {
  const { incomeTransactions } = useContext(GlobalContext)

  const incomeAmounts = incomeTransactions.map(
    (incomeTransaction) => incomeTransaction.incomeAmount
  )

  const totalIncome = incomeAmounts.reduce(
    (accumulator, item) => (accumulator += item),
    0
  )

  return (
    <div>
      <h2>Tu solicitud</h2>
      <div>
        <p>${totalIncome}</p>
      </div>
    </div>
  )
}

export default Balance
