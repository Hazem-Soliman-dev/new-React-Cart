import React from 'react'

const Total = ({calckAllPrice}) => {
  return (
    <div className='text-3xl text-center'>
        <span>Total: {calckAllPrice()}</span>
    </div>
  )
}

export default Total