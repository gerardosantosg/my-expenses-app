import React, { useState, useRef, useEffect } from 'react'
import Header from './Header'
import Balance from './Balance'
import IncomeExpense from './IncomeExpense'
import History from './History'

const LOCAL_STORAGE_KEY = 'ExpensesApp.transactions'

const Info = () => {
  const [transactions, setTransactions] = useState([])
  const descriptionValue = useRef()
  const amountValue = useRef()

  useEffect(() => {
    const storedTransactions = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    )
    if (storedTransactions) setTransactions(storedTransactions)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(transactions))
  }, [transactions])

  const submitTransaction = (e) => {
    const description = descriptionValue.current.value
    const amount = amountValue.current.value
    if (description === '' || amount === '') alert('escribe perro')
    setTransactions((prevTransactions) => {
      if (description === '' || amount === '') {
        return [...prevTransactions]
      }
      return [
        ...prevTransactions,
        {
          id: Math.floor(Math.random() * 100000000),
          description: description,
          amount: Number(amount),
        },
      ]
    })
    descriptionValue.current.value = null
    amountValue.current.value = null
  }

  // ACABO DE MANDAR LAS PROPS A BALANCE
  return (
    <>
      <Header />
      <Balance transactions={transactions} />
      <IncomeExpense transactions={transactions} />
      <div className='addNew'>
        <h3>Add a new transaction</h3>
        <label htmlFor='description'>
          <h6 className='input-title'>Description</h6>
        </label>
        <input
          className='inputText'
          autoComplete='off'
          id='description'
          placeholder='Enter a description...'
          type='text'
          ref={descriptionValue}
        ></input>
        <label htmlFor='amount'>
          <div className='enterAmount'>
            <h6 className='input-title'>Amount :</h6>

            <p className='neg-pos'>
              Negative numbers for expenses and positive numbers for incomes
            </p>
          </div>
        </label>
        <input
          className='inputText'
          placeholder='Enter an amount...'
          type='number'
          id='amount'
          ref={amountValue}
        ></input>
        <button onClick={submitTransaction}>Add Transaction</button>
      </div>
      <History transactions={transactions} setTransactions={setTransactions} />
    </>
  )
}

export default Info
