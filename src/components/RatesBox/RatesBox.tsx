import React from 'react'
import './RatesBox.scss'

interface Props {
    amount: string
    label: string
}

const RatesBox: React.FC<Props> = ({ amount, label }) => (
    <div className='rate'>
        <span className='hour'>{label}</span>
        <span className='amount'>{amount}</span>
    </div>
)

export default RatesBox
