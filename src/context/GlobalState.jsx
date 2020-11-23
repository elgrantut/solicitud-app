import React, { createContext, useEffect, useReducer } from 'react'
import AppReducer from './AppReducer'

const initialState = {
  incomeTransactions:
    JSON.parse(localStorage.getItem('incomeTransactions')) || []
}

export const GlobalContext = createContext(initialState)

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  useEffect(() => {
    localStorage.setItem(
      'incomeTransactions',
      JSON.stringify(state.incomeTransactions)
    )
  })

  const addIncome = (incomeTransaction) => {
    dispatch({
      type: 'ADD_INCOME',
      payload: incomeTransaction
    })
  }

  const deleteTransaction = (id) => {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        incomeTransactions: state.incomeTransactions,
        addIncome,
        deleteTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
