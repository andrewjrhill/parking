import React from 'react'
import classnames from 'classnames'
import ordinal from 'ordinal'
import './ParkingSpaceItem.scss'
import ParkingSpace from '../../types/parking-space.types'
import { Button, Collapse } from '@blueprintjs/core'
import { HourlyRate } from '../../types/rates.types'
import RatesBox from '../RatesBox/RatesBox'

interface Props {
    parkingSpace: ParkingSpace
    onEditDialogOpen: (parkingSpaceToEdit: ParkingSpace) => void
    onSelectParkingSpace: (parkingSpaceId: string | undefined) => void
    selectedParkingSpaceId?: string
}

const ParkingSpaceItem: React.FC<Props> = ({
    parkingSpace,
    onEditDialogOpen,
    onSelectParkingSpace,
    selectedParkingSpaceId
}) => {
    const isActive = selectedParkingSpaceId === parkingSpace.id

    return (
        <div className={classnames('parking-space-item', parkingSpace.availability, isActive && 'active')}>
            <div className='general-info'>
                <span className='name'>{parkingSpace.name}</span>

                <span className='type'>{parkingSpace.type}</span>

                <span className='availability'>{parkingSpace.availability}</span>

                <Button
                    className='rates'
                    minimal
                    onClick={() => onSelectParkingSpace(isActive ? undefined : parkingSpace.id)}
                    small
                >
                    {isActive ? 'Hide Rates' : 'View Rates'}
                </Button>

                <Button
                    className='edit-space-button'
                    icon='edit'
                    minimal
                    onClick={() => onEditDialogOpen(parkingSpace)}
                    small
                />
            </div>

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
