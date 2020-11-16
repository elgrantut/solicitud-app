import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const IncomeTransactions = ({ incomeTransaction, isChecked }) => {
  const { deleteTransaction } = useContext(GlobalContext)
  return (
    <li>
      <span>{incomeTransaction.incomeText}</span>
      <span>{incomeTransaction.incomeAmount}</span>
      {incomeTransaction.incomeIva ? (
        <span>iva: ${incomeTransaction.incomeIva}</span>
      ) : null}
      <button
        className="btn btn-danger"
        onClick={() => deleteTransaction(incomeTransaction.id)}
      >
        <i className="fas fa-trash"></i>
      </button>
    </li>
  )
}

export default IncomeTransactions
