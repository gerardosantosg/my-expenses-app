import React from 'react'

const Balance = ({ transactions }) => {
  const incomes = []
  const expenses = []
  if (transactions !== undefined) {
    for (let transaction of transactions) {
      if (transaction.amount > 0) incomes.push(transaction.amount)
      else if (transaction.amount < 0) expenses.push(transaction.amount)
    }
  }
  let sumIncomes = incomes.reduce((a, b) => a + b, 0)
  let sumExpenses = expenses.reduce((a, b) => a + b, 0)
  let total = sumIncomes + sumExpenses
  let balanceColor = 'white-balance'
  if (total > 0) balanceColor = 'green-balance'
  else if (total < 0) balanceColor = 'red-balance'

  return (
    <div className='Balance'>
      <h2>Your Balance</h2>
      <h3 id='balanceMoney' className={balanceColor}>{`${
        total >= 0 ? ' ' : '-'
      }$${Math.abs(total).toFixed(2)}`}</h3>
    </div>
  )
}

export default Balance
