import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Balance = () => {
  const { incomeTransactions, expenseTransactions } = useContext(GlobalContext)

  const incomeAmounts = incomeTransactions.map(
    (incomeTransaction) => incomeTransaction.incomeAmount
  )

  const expenseAmounts = expenseTransactions.map(
    (expenseTransaction) => expenseTransaction.expenseAmount
  )

  const totalIncome = incomeAmounts.reduce(
    (accumulator, item) => (accumulator += item),
    0
  )

  const totalExpenses = expenseAmounts.reduce(
    (accumulator, item) => (accumulator += item),
    0
  )

  return (
    <div>
      <h2>Your Balance</h2>
      <h3>${(totalIncome - totalExpenses).toFixed(2)}</h3>
      <div>
        <div>
          <h3>Income</h3>
          <p>${totalIncome}</p>
        </div>
        <div>
          <h3>Expenses</h3>
          <p>$ {totalExpenses}</p>
        </div>
      </div>
    </div>
  )
}

export default Balance
