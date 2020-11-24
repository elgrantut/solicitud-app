import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Balance = () => {
  const { incomeTransactions } = useContext(GlobalContext)

  // sums up all incomes
  const incomeAmounts = incomeTransactions.map(
    (incomeTransaction) => incomeTransaction.incomeAmount
  )
  const totalIncome = incomeAmounts.reduce((acc, item) => (acc += item), 0)

  // sums up all ivas
  const incomeIvas = incomeTransactions.map(
    (incomeTransaction) => incomeTransaction.incomeIva
  )
  const totalIva = incomeIvas.reduce((acc, item) => (acc += item), 0)

  // sums up all Aportes
  const incomeAportes = incomeTransactions.map(
    (incomeTransaction) => incomeTransaction.incomeAportes
  )
  const totalAportes = incomeAportes.reduce((acc, item) => (acc += item), 0)

  // Total Balance
  const totalBalance = totalIncome + totalIva + totalAportes

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
