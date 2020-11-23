import React from 'react'
import Header from './components/Header'
import Balance from './components/Balance'
import AddTransaction from './components/AddTransaction'
import IncomeList from './components/IncomeList'
import { GlobalContextProvider } from './context/GlobalState'
import './styles.css'

const App = () => {
  return (
    <GlobalContextProvider>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col col-md-12 bg-primary py-3">
            <Header />
          </div>
          <div className="col-md-6  py-3">
            <AddTransaction />
            <Balance />
          </div>
          <div className="col-md-6 py-3">
            <IncomeList />
          </div>
        </div>
      </div>
    </GlobalContextProvider>
  )
}

export default App
