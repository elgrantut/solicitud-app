import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const IncomeTransactions = ({ incomeTransaction }) => {
  const { deleteTransaction } = useContext(GlobalContext)
  return (
    <li className="list-group-item ">
      <span>{incomeTransaction.incomeText}: </span>
      <span>{incomeTransaction.incomeAmount}</span>
      {incomeTransaction.incomeIva ? (
        <span> / IVA: ${incomeTransaction.incomeIva}</span>
      ) : null}
      <button
        className="btn text-danger"
        onClick={() => deleteTransaction(incomeTransaction.id)}
      >
        <i className="fas fa-trash"></i>
      </button>
    </li>
  )
}

export default IncomeTransactions
