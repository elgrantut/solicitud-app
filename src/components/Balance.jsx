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

  const IncomeIvas = incomeTransactions.map(
    (incomeTransaction) => incomeTransaction.incomeIva
  )

  const totalIva = IncomeIvas.reduce((acc, item) => (acc += item), 0)

  const totalBalance = totalIncome + totalIva

  return (
    <div>
      <h2>Tu solicitud: </h2>
      <div>
        <h5 className="display-4 text-success">${totalBalance}</h5>
      </div>
    </div>
  )
}

export default Balance
