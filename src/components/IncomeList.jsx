import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import IncomeTransaction from './IncomeTransactions'

const IncomeList = () => {
  const { incomeTransactions } = useContext(GlobalContext)
  console.log(incomeTransactions)
  return (
    <div>
      <h5 className="text-primary">Items de Carpeta</h5>
      <ul className="list-group">
        {incomeTransactions.map((incomeTransaction) => (
          <IncomeTransaction
            key={incomeTransaction.id}
            incomeTransaction={incomeTransaction}
          />
        ))}
      </ul>
    </div>
  )
}

export default IncomeList
