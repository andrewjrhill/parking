import React, { useState } from 'react'
import './FloorsPage.scss'
import ParkingListItem from '../ParkingSpaceItem/ParkingSpaceItem'
import ParkingSpace from '../../types/parking-space.types'
import PARKING_SPACE_DATA from '../../data/parking-space.data'
import { useParams } from 'react-router'
import { NonIdealState } from '@blueprintjs/core'
import { useQuery } from '../../Utilities/utilities'
import { useLocation } from 'react-router-dom'
import ParkingAddOrEditDialog from '../ParkingAddOrEditDialog/ParkingAddOrEditDialog'

const FloorsPage: React.FC = () => {
    const { id } = useParams<{ id: string }>()
    const query = useQuery(useLocation().search)

    const [initialEditFormState, setInitialEditFormState] = useState<ParkingSpace | undefined>()
    const onEditDialogOpen = (initialFormState: ParkingSpace) => setInitialEditFormState(initialFormState)

    const [selectedParkingSpaceId, setSelectedParkingSpaceId] = useState<string | undefined>()
    const onSelectParkingSpace = (floorId?: string) => setSelectedParkingSpaceId(floorId)

    const parkingSpaces = PARKING_SPACE_DATA.filter((parkingSpace: ParkingSpace) => {
        if (!!query.get('filter')) return parkingSpace.floorId === id && parkingSpace.type === query.get('filter')
        else return parkingSpace.floorId === id
    })

    return (
        <>
            <div className='floors-page'>
                {!parkingSpaces.length && (
                    <NonIdealState
                        icon='unknown-vehicle'
                        title='This floor has no parking spaces'
                        description='Please use the button at the top of the screen to add new parking spaces.'
                    />
                )}

                {!!parkingSpaces.length &&
                    parkingSpaces
                        .sort((a: ParkingSpace, b: ParkingSpace) => (a.name < b.name ? -1 : 1))
                        .map((parkingSpace: ParkingSpace) => (
                            <ParkingListItem
                                key={parkingSpace.id}
                                parkingSpace={parkingSpace}
                                onEditDialogOpen={onEditDialogOpen}
                                onSelectParkingSpace={onSelectParkingSpace}
                                selectedParkingSpaceId={selectedParkingSpaceId}
                            />
                        ))}
            </div>

            <ParkingAddOrEditDialog
                initialFormState={initialEditFormState}
                isOpen={!!initialEditFormState}
                onClose={() => setInitialEditFormState(undefined)}
            />
        </>
    )
}

export default FloorsPage
