import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const IncomeTransactions = ({ incomeTransaction, isChecked }) => {
  const { deleteTransaction } = useContext(GlobalContext)
  return (
    <li className="transaction">
      <span className="transaction-text">{incomeTransaction.incomeText}</span>
      <span className="transaction-amount">
        {incomeTransaction.incomeAmount}
      </span>
      {incomeTransaction.iva ? (
        <span className="transaction-amount">
          iva: ${incomeTransaction.iva}
        </span>
      ) : null}
      <button
        className="delete-btn"
        onClick={() => deleteTransaction(incomeTransaction.id)}
      >
        <i className="fas fa-trash"></i>
      </button>
    </li>
  )
}

export default IncomeTransactions
