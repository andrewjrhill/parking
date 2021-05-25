import React from 'react'
import classnames from 'classnames'
import './FloorsTabsList.scss'
import FLOOR_DATA from '../../data/floors.data'
import Floor from '../../types/floor.types'
import { Button } from '@blueprintjs/core'
import { useHistory, matchPath, useLocation } from 'react-router-dom'
import PARKING_SPACE_DATA from '../../data/parking-space.data'
import ParkingSpace from '../../types/parking-space.types'
import Icon from '@mdi/react'
import { mdiArrowRightCircle } from '@mdi/js'

const FloorsTabsList: React.FC = () => {
    const history = useHistory()
    const { pathname } = useLocation()
    const path = matchPath(pathname, { path: '/floor/:id' })

    const isActive = (floorId: string) => (path?.params as { id: string }).id === floorId

    const parkingSpaceAvailabilityCount = (floorId: string) =>
        PARKING_SPACE_DATA.filter(
            (parkingSpace: ParkingSpace) => parkingSpace.floorId === floorId && !!parkingSpace.available
        ).length

    return (
        <div className='floors-tabs-list'>
            <p className='heading'>Navigate Floors</p>

            {FLOOR_DATA.map((floor: Floor) => (
                <Button
                    className={classnames('tab', isActive(floor.id) && 'active')}
                    key={floor.id}
                    onClick={() => history.push(`/floor/${floor.id}`)}
                >
                    <span>{floor.name}</span>

                    <div className='availability-wrapper'>
                        <span>{parkingSpaceAvailabilityCount(floor.id)}</span>
                        {isActive(floor.id) && <Icon className='icon' path={mdiArrowRightCircle} />}
                    </div>
                </Button>
            ))}
        </div>
    )
}

export default FloorsTabsList
