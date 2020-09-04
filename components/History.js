import React from 'react'

const History = ({ transactions, setTransactions }) => {
  const removeElement = (id) => {
    if (window.confirm('Do you really want to delete this contact?')) {
      const filtered = transactions.filter(
        (transaction) => transaction.id !== id
      )
      setTransactions(filtered)
    }
  }

  return (
    <div className='History'>
      <h4>History</h4>
      <ul>
        {transactions.map((transaction) => (
          <li
            className={transaction.amount > 0 ? 'green' : 'red'}
            key={transaction.id}
          >
            <div className='desc-date'>
              <p className='description'>{transaction.description}</p>
              <p className='date'>
                <span>
                  <strong>Transaction's Date: </strong>
                </span>
                {transaction.date}
              </p>
            </div>
            <div className='right'>
              <h6 className='amount-list'>{`${
                transaction.amount > 0 ? ' ' : '-'
              }$${Math.abs(transaction.amount).toFixed(2)}`}</h6>
              <h6 className='delete'>
                <i
                  onClick={() => removeElement(transaction.id)}
                  className='fa fa-trash remove end'
                  aria-hidden='true'
                ></i>
              </h6>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default History
