import React, { useState } from 'react'
import './FloorsPage.scss'
import ParkingListItem from '../ParkingSpaceItem/ParkingSpaceItem'
import ParkingSpace from '../../types/parking-space.types'
import PARKING_SPACE_DATA from '../../data/parking-space.data'
import { useParams } from 'react-router'
import { NonIdealState } from '@blueprintjs/core'

const FloorsPage: React.FC = () => {
    const { id } = useParams<{ id: string }>()

    const [selectedParkingSpaceId, setSelectedParkingSpaceId] = useState<string | undefined>()
    const onSelectParkingSpace = (floorId?: string) => setSelectedParkingSpaceId(floorId)

    const parkingSpaces = PARKING_SPACE_DATA.filter((parkingSpace: ParkingSpace) => parkingSpace.floorId === id)

    return (
        <div className='floors-page'>
            {!parkingSpaces.length && (
                <NonIdealState
                    icon='unknown-vehicle'
                    title='This floor has no parking spaces'
                    description='Please use the button at the top of the screen to add new parking spaces.'
                />
            )}

            {!!parkingSpaces.length &&
                parkingSpaces.map((parkingSpace: ParkingSpace) => (
                    <ParkingListItem
                        key={parkingSpace.id}
                        parkingSpace={parkingSpace}
                        onSelectParkingSpace={onSelectParkingSpace}
                        selectedParkingSpaceId={selectedParkingSpaceId}
                    />
                ))}
        </div>
    )
}

export default FloorsPage
