import React from 'react'
import { Button } from '@blueprintjs/core'
import './ParkingCreateButton.scss'

interface Props {
    onClick: () => void
}

const ParkingCreateButton: React.FC<Props> = ({ onClick }) => (
    <Button className='parkingCreateButton' large onClick={onClick}>
        Add Parking
    </Button>
)

export default ParkingCreateButton
