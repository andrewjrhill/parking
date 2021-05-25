import React from 'react'
import { matchPath, useLocation } from 'react-router-dom'
import FLOOR_DATA from '../../data/floors.data'
import Floor from '../../types/floor.types'
import ParkingCreateButton from '../ParkingCreateButton/ParkingCreateButton'
import './PageTitle.scss'

const PageTitle: React.FC = () => {
    const { pathname } = useLocation()
    const path = matchPath(pathname, { path: '/floor/:id' })

    const currentFloor = FLOOR_DATA.find((floor: Floor) => (path?.params as { id: string }).id === floor.id)

    return (
        <div className='page-title'>
            <div className='headings-container'>
                <h1 className='bp3-heading title'>{`${currentFloor?.name}: Parking Undetermined`}</h1>
                <p className='subtitle'>Dronning Eufemias gate 30</p>
            </div>

            <div className='action-container'>
                <ParkingCreateButton />
            </div>
        </div>
    )
}

export default PageTitle
