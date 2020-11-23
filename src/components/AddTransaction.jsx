import React, { useState, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { GlobalContext } from '../context/GlobalState'
import { IVA } from '../const/impuestos'

const INIT_INCOME = {
  incomeText: '',
  incomeAmount: 0,
  incomeIva: 0,
  incomeAportes: 0
}

const AddTransaction = () => {
  const { addIncome } = useContext(GlobalContext)

  ///Fallows State Inputs

  const [income, setIncome] = useState(INIT_INCOME)

  const { incomeText, incomeAmount } = income

  // Chceckbox state

  const [isChecked, setIsChecked] = useState(false)

  /// Listen for Input Change

  const onChangeIncome = (e) => {
    const { name, value } = e.target
    setIncome({ ...income, [name]: value })
    console.log(income)
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

  return (
    <div className="col p-2">
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
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            name="incomeIva"
            type="checkbox"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          <label className="form-check-label">Iva</label>
        </div>
        <div className="form-group form-check-inline">
          <input
            className="form-check-input"
            name="incomeAportes"
            type="checkbox"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          <label className="form-check-label">Aportes</label>
        </div>
        <div className="form-group">
          <button className="btn btn-primary" type="submit" value="submit">
            submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddTransaction
