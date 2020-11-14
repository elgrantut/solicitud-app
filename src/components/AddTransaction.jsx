import React, { useState, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { GlobalContext } from '../context/GlobalState'

const AddTransaction = () => {
  const { addIncome, addExpense } = useContext(GlobalContext)

  ///Fallows State Inputs

  const [income, setIncome] = useState({
    incomeText: '',
    incomeAmount: 0
  })
  const [expense, setExpense] = useState({
    expenseText: '',
    expenseAmount: 0
  })

  const { incomeText, incomeAmount } = income
  const { expenseText, expenseAmount } = expense

  // Chceckbox state

  const [isChecked, setIsChecked] = useState(false)

  /// Listen for Input Change

  const onChangeIncome = (e) => {
    const { name, value } = e.target
    setIncome({ ...income, [name]: value })
    console.log(income)
  }

  const onChangeExpense = (e) => {
    const { name, value } = e.target
    setExpense({ ...expense, [name]: value })
  }

  // Form Submit handlers

  const onSubmitIncome = (e) => {
    e.preventDefault()
    if (incomeText && incomeAmount && isChecked) {
      const newIncomeTransaction = {
        id: uuidv4(),
        incomeText,
        incomeAmount: Number(incomeAmount),
        iva: incomeAmount * 0.21
      }
      addIncome(newIncomeTransaction)
      setIncome({
        incomeText: '',
        incomeAmount: 0,
        iva: 0
      })
    } else if (incomeText && incomeAmount) {
      const newIncomeTransaction = {
        id: uuidv4(),
        incomeText,
        incomeAmount: Number(incomeAmount),
        iva: 0
      }
      addIncome(newIncomeTransaction)
      setIncome({
        incomeText: '',
        incomeAmount: 0,
        iva: 0
      })
    } else {
      alert('A text and amount must be provided')
    }
  }

  const onSubmitExpense = (e) => {
    e.preventDefault()
    if (incomeText && incomeAmount) {
      const newExpenseTransaction = {
        id: uuidv4(),
        expenseText,
        expenseAmount: Number(expenseAmount)
      }
      addExpense(newExpenseTransaction)
      setExpense({
        expenseText: '',
        expenseAmount: 0
      })
    } else {
      alert('A text and amount must be provided')
    }
  }

  return (
    <div className="form-wrapper">
      <form onSubmit={onSubmitIncome}>
        <div className="input-group income">
          <label>Iva</label>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          <input
            type="text"
            name="incomeText"
            value={incomeText}
            placeholder="Add Income..."
            autoComplete="off"
            onChange={onChangeIncome}
          />
          <input
            type="number"
            name="incomeAmount"
            value={incomeAmount}
            placeholder="Amount"
            autoComplete="off"
            onChange={onChangeIncome}
          />
          <input type="submit" value="submit" />
        </div>
      </form>
      <form onSubmit={onSubmitExpense}>
        <div className="input-group expense">
          <input
            type="text"
            name="expenseText"
            value={expenseText}
            placeholder="Add Expense..."
            autoComplete="off"
            onChange={onChangeExpense}
          />
          <input
            type="number"
            name="expenseAmount"
            value={expenseAmount}
            placeholder="Amount"
            autoComplete="off"
            onChange={onChangeExpense}
          />
          <input type="submit" value="submit" />
        </div>
      </form>

      <form></form>
    </div>
  )
}

export default AddTransaction
