import { useState } from 'react'
import CustomerList from './components/CustomerList/CustomerList'
import CustomerForm from './components/CustomerForm/CustomerForm'
import './App.css'

function App() {

  const [customers, setCustomers] = useState([]);
  const addNewCustomer = (newCustomer) => {
    setCustomers([...customers, newCustomer]);
  };

  return (
    <div className="app">
      <h1>Customer Manage System</h1>
      <CustomerForm addNewCustomer={addNewCustomer} />
      {customers.length === 0 && "There are no customers..."}
      <CustomerList customers={customers} setCustomers={setCustomers} />
    </div>
  )
}

export default App
