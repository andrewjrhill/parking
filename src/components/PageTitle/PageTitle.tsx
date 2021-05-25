import React from 'react'
import { matchPath, useLocation } from 'react-router-dom'
import FLOOR_DATA from '../../data/floors.data'
import PARKING_SPACE_DATA from '../../data/parking-space.data'
import Floor from '../../types/floor.types'
import ParkingSpace from '../../types/parking-space.types'
import ParkingCreateButton from '../ParkingCreateButton/ParkingCreateButton'
import './PageTitle.scss'

const PageTitle: React.FC = () => {
    const { pathname } = useLocation()
    const path = matchPath(pathname, { path: '/floor/:id' })

    const currentFloor = FLOOR_DATA.find((floor: Floor) => (path?.params as { id: string }).id === floor.id)
    const parkingAvailability =
        !!currentFloor &&
        PARKING_SPACE_DATA.filter(
            (parkingSpace: ParkingSpace) => parkingSpace.floorId === currentFloor.id && !!parkingSpace.available
        ).length > 0
            ? 'Parking Available'
            : 'Parking Unavailable'

    return (
        <div className='page-title'>
            <div className='headings-container'>
                <h1 className='bp3-heading title'>{`${currentFloor?.name}: ${parkingAvailability}`}</h1>
                <p className='subtitle'>Dronning Eufemias gate 30</p>
            </div>

            <div className='action-container'>
                <ParkingCreateButton />
            </div>
        </div>
    )
}

export default PageTitle
