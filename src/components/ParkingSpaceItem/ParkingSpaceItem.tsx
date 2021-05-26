import React from 'react'
import classnames from 'classnames'
import ordinal from 'ordinal'
import './ParkingSpaceItem.scss'
import ParkingSpace from '../../types/parking-space.types'
import { Collapse } from '@blueprintjs/core'
import { HourlyRate } from '../../types/rates.types'
import RatesBox from '../RatesBox/RatesBox'

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
                    {parkingSpace.rates.hourly.map((rate: HourlyRate) => (
                        <RatesBox
                            amount={`${rate.amount} NOK`}
                            key={rate.hour}
                            label={`${ordinal(rate.hour)} hour: `}
                        />
                    ))}

                    <RatesBox amount={`${parkingSpace.rates.remaining} NOK`} label='Remaining hours: ' />
                </div>
            </Collapse>
        </div>
    )
}

export default ParkingSpaceItem
