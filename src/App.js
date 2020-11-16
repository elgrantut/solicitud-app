import React from 'react'
import Header from './components/Header'
import Balance from './components/Balance'
import AddTransaction from './components/AddTransaction'
import IncomeList from './components/IncomeList'
import ExpenseList from './components/ExpenseList'
import { GlobalContextProvider } from './context/GlobalState'
import './styles.css'

const App = () => {
  return (
    <GlobalContextProvider>
      <div className="container-fluid">
        <div className="row justify-content-md-center">
          <Header />
        </div>
        <div className="row">
          <div className="col-4 py-2">
            <Balance />
          </div>
          <div className="col-4 py-2">
            <AddTransaction />
          </div>
          <div className="col-12">
            <IncomeList />
            <ExpenseList />
          </div>
        </div>
      </div>
    </GlobalContextProvider>
  )
}

export default App
