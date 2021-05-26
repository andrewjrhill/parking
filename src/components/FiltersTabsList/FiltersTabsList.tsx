import React, { useCallback } from 'react'
import classnames from 'classnames'
import './FiltersTabsList.scss'
import { Button } from '@blueprintjs/core'
import PARKING_SPACE_DATA from '../../data/parking-space.data'
import ParkingSpace, { ParkingSpaceType } from '../../types/parking-space.types'
import Icon from '@mdi/react'
import { mdiCheckCircle, mdiBike, mdiCarPickup, mdiCarSports, mdiMotorbike, mdiWheelchairAccessibility } from '@mdi/js'
import uniq from 'lodash/uniq'
import { useHistory } from 'react-router'
import { matchPath, useLocation } from 'react-router-dom'
import { useQuery } from '../../Utilities/utilities'
import FLOOR_DATA from '../../data/floors.data'
import Floor from '../../types/floor.types'

const FiltersTabsList: React.FC = () => {
    const history = useHistory()
    const { pathname } = useLocation()
    const path = matchPath(pathname, { path: '/floor/:id' })
    const query = useQuery(useLocation().search)
    const parkingSpaceTypes = uniq(PARKING_SPACE_DATA.map((parkingSpace: ParkingSpace) => parkingSpace.type))

    const isActive = (type: ParkingSpaceType) => query.get('filter') === type

    const availabilityCount = useCallback(
        (type: ParkingSpaceType) => {
            const floor = FLOOR_DATA.find((floor: Floor) => floor.id === (path?.params as { id: string }).id)
            if (!floor) {
                return 0
            } else {
                return PARKING_SPACE_DATA.filter(
                    (parkingSpace: ParkingSpace) =>
                        parkingSpace.floorId === floor.id && parkingSpace.type === type && parkingSpace.available
                ).length
            }
        },
        [path?.params]
    )

    const getIconByType = (type: ParkingSpaceType) => {
        switch (type) {
            case 'compact':
                return mdiCarSports

            case 'large':
                return mdiCarPickup

            case 'handicapped':
                return mdiWheelchairAccessibility

            case 'motorcycle':
                return mdiMotorbike

            case 'bicycle':
                return mdiBike

            default:
                throw new Error(`No icon associated with ${type}`)
        }
    }

    const onChangeFilter = (type: ParkingSpaceType) => {
        if (query.get('filter') === type) history.replace({ search: '' })
        else history.push(`?filter=${type}`)
    }

    return (
        <div className='filters-tabs-list'>
            <p className='heading'>Filter by type</p>

            {parkingSpaceTypes.map((type: ParkingSpaceType) => (
                <Button
                    className={classnames('tab', isActive(type) ? 'active' : 'inactive')}
                    key={type}
                    onClick={() => onChangeFilter(type)}
                >
                    <Icon className='icon' path={getIconByType(type)} />
                    <span className='type'>{type}</span>
                    <span className='availability-count'>{availabilityCount(type)}</span>
                    {isActive(type) && <Icon className='icon checkmark' path={mdiCheckCircle} />}
                </Button>
            ))}
        </div>
    )
}

export default FiltersTabsList
