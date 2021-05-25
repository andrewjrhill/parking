import React from 'react'
import classnames from 'classnames'
import ordinal from 'ordinal'
import './ParkingSpaceItem.scss'
import ParkingSpace from '../../types/parking-space.types'
import { Collapse } from '@blueprintjs/core'
import Rate from '../../types/rates.types'

interface Props {
    parkingSpace: ParkingSpace
    onSelectParkingSpace: (parkingSpaceId: string | undefined) => void
    selectedParkingSpaceId?: string
}

const ParkingSpaceItem: React.FC<Props> = ({ parkingSpace, onSelectParkingSpace, selectedParkingSpaceId }) => {
    const availabilityLabel = parkingSpace.available ? 'available' : 'unavailable'
    const isActive = selectedParkingSpaceId === parkingSpace.id

    return (
        <div className={classnames('parking-space-item', availabilityLabel, isActive && 'active')}>
            <button className='button' onClick={() => onSelectParkingSpace(isActive ? undefined : parkingSpace.id)}>
                <span className='name'>{parkingSpace.name}</span>
                <span className='type'>{parkingSpace.type}</span>
                <span className={'availability'}>{availabilityLabel}</span>
                <span className='rates'>View Rates</span>
            </button>

            <Collapse isOpen={isActive}>
                <div className='rates-container'>
                    {parkingSpace.rates.map((rate: Rate) => (
                        <div className='rate' key={rate.hour}>
                            <span className='hour'>{`${ordinal(rate.hour)} hour: `}</span>
                            <span className='amount'>{`${rate.amount} NOK`}</span>
                        </div>
                    ))}
                </div>
            </Collapse>
        </div>
    )
}

export default ParkingSpaceItem
