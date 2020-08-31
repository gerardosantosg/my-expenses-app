import React from 'react'

const IncomeExpense = ({ transactions }) => {
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

  return (
    <div className='inc-exp'>
      <div>
        <h4 className='income'>Income</h4>
        <h5 className='inc-exp-amount'>{`$${sumIncomes.toFixed(2)}`}</h5>
      </div>
      <div>
        <h4 className='expense'>Expense</h4>
        <h5 className='inc-exp-amount'>{`${
          sumExpenses > 0 ? ' ' : '-'
        }$${Math.abs(sumExpenses).toFixed(2)}`}</h5>
      </div>
    </div>
  )
}

export default IncomeExpense
