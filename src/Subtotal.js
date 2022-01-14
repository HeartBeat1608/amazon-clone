import React from 'react'
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
function Subtotal() {

    return (
        <div className='subtotal'>
            <CurrencyFormat value={12} thousandSeparator={','} />
        </div>
    )
}

export default Subtotal
