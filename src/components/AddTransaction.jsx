import React, { useState, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { GlobalContext } from '../context/GlobalState'
import { IVA } from '../const/impuestos'

const INIT_INCOME = { incomeText: '', incomeAmount: 0, incomeIva: 0 }

const AddTransaction = () => {
  const { addIncome, addExpense } = useContext(GlobalContext)

  ///Fallows State Inputs

  const [income, setIncome] = useState(INIT_INCOME)
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
        incomeIva: incomeAmount * IVA
      }
      addIncome(newIncomeTransaction)
      setIncome({
        incomeText: '',
        incomeAmount: 0,
        incomeIva: 0
      })
    } else if (incomeText && incomeAmount) {
      const newIncomeTransaction = {
        id: uuidv4(),
        incomeText,
        incomeAmount: Number(incomeAmount),
        incomeIva: 0
      }
      addIncome(newIncomeTransaction)
      setIncome({
        incomeText: '',
        incomeAmount: 0,
        incomeIva: 0
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
    <div>
      <form onSubmit={onSubmitIncome}>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="incomeText"
            value={incomeText}
            placeholder="Add Income..."
            autoComplete="off"
            onChange={onChangeIncome}
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="number"
            name="incomeAmount"
            value={incomeAmount}
            placeholder="Amount"
            autoComplete="off"
            onChange={onChangeIncome}
          />
        </div>
        <div className="form-group form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          <label className="form-check-label">Iva</label>
        </div>
        <button className="btn btn-primary" type="submit" value="submit">
          submit
        </button>
      </form>
      <form className="mt-3" onSubmit={onSubmitExpense}>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="expenseText"
            value={expenseText}
            placeholder="Add Expense..."
            autoComplete="off"
            onChange={onChangeExpense}
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="number"
            name="expenseAmount"
            value={expenseAmount}
            placeholder="Amount"
            autoComplete="off"
            onChange={onChangeExpense}
          />
        </div>
        <button className="btn btn-primary" type="submit" value="submit">
          Submit
        </button>
      </form>
    </div>
  )
}

export default AddTransaction
