import React, { MouseEvent, SyntheticEvent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Button, Dialog, HTMLSelect, InputGroup, Label, NumericInput } from '@blueprintjs/core'
import { matchPath, useLocation } from 'react-router-dom'
import FLOOR_DATA from '../../data/floors.data'
import Floor from '../../types/floor.types'
import CloseButton from '../CloseButton/CloseButton'
import './ParkingAddOrEditDialog.scss'
import { capitalize, uniq } from 'lodash'
import PARKING_SPACE_DATA from '../../data/parking-space.data'
import ParkingSpace, { ParkingSpaceAvailability, ParkingSpaceType } from '../../types/parking-space.types'
import ordinal from 'ordinal'
import { HourlyRate } from '../../types/rates.types'

interface Props {
    parkingSpaceToEdit?: ParkingSpace
    isOpen: boolean
    onClose: () => void
}

const ParkingAddOrEditDialog: React.FC<Props> = ({ parkingSpaceToEdit, isOpen, onClose }) => {
    const { pathname } = useLocation()
    const path = matchPath(pathname, { path: '/floor/:id' })

    const currentFloor = !!path
        ? FLOOR_DATA.find((floor: Floor) => (path?.params as { id: string }).id === floor.id)
        : undefined

    const emptyFormState: ParkingSpace = {
        availability: 'available' as ParkingSpaceAvailability,
        floorId: currentFloor?.id ?? '',
        id: uuidv4(),
        name: '',
        rates: {
            hourly: [{ hour: 1, amount: 0 }],
            remaining: 0
        },
        type: 'compact' as ParkingSpaceType
    }

    const [formState, setFormState] = useState<ParkingSpace>(emptyFormState)

    const ParkingSpaceAvailabilities = uniq(PARKING_SPACE_DATA.map((p: ParkingSpace) => p.availability))
    const parkingSpaceTypes = uniq(PARKING_SPACE_DATA.map((p: ParkingSpace) => p.type))

    const populateEditForm = () => {
        if (!parkingSpaceToEdit) throw new Error('Error: edit data not found!')
        setFormState(parkingSpaceToEdit)
    }

    const onSubmit = (event: SyntheticEvent) => {
        event.preventDefault()

        const payload: ParkingSpace = {
            availability: formState.availability,
            floorId: currentFloor?.id ?? '',
            id: formState.id,
            name: formState.name,
            rates: formState.rates,
            type: formState.type
        }

        const existingParkingSpaceIndex = PARKING_SPACE_DATA.findIndex(parkingIndex => parkingIndex.id === payload.id)
        if (existingParkingSpaceIndex >= 0) PARKING_SPACE_DATA.splice(existingParkingSpaceIndex, 1)
        PARKING_SPACE_DATA.push(payload)

        onClose()
        setFormState(emptyFormState)
    }

    return (
        <Dialog
            className='parking-add-or-edit-dialog'
            isOpen={isOpen}
            key={formState.id}
            onClose={onClose}
            onOpening={parkingSpaceToEdit ? populateEditForm : undefined}
        >
            <CloseButton onClick={onClose} />

            <p className='title'>{!!parkingSpaceToEdit ? 'Edit' : 'Add'} Parking Space</p>

            <p className='subtitle'>
                {!!parkingSpaceToEdit
                    ? `You are editing a parking space on ${currentFloor?.name}.`
                    : `You are adding a new parking space to ${currentFloor?.name}.`}
            </p>

            <form className='form' onSubmit={onSubmit}>
                <p className='form-section-heading'>General Information</p>

                <Label>
                    Name:
                    <InputGroup
                        defaultValue={formState.name}
                        fill
                        id='name'
                        name='name'
                        onChange={event => setFormState({ ...formState, name: event.currentTarget.value })}
                        placeholder='e.g. P314'
                        required
                    />
                </Label>

                <div className='side-by-side'>
                    <Label>
                        Type:
                        <HTMLSelect
                            defaultValue={formState.type}
                            fill
                            id='type'
                            name='type'
                            onChange={event =>
                                setFormState({ ...formState, type: event.currentTarget.value as ParkingSpaceType })
                            }
                            options={parkingSpaceTypes.map(value => ({ label: capitalize(value), value }))}
                            required
                        />
                    </Label>

                    <Label>
                        Availability:
                        <HTMLSelect
                            defaultValue={formState.availability}
                            fill
                            id='availability'
                            name='availability'
                            onChange={event =>
                                setFormState({
                                    ...formState,
                                    availability: event.currentTarget.value as ParkingSpaceAvailability
                                })
                            }
                            options={ParkingSpaceAvailabilities.map(value => ({ label: capitalize(value), value }))}
                            required
                        />
                    </Label>
                </div>

                <p className='form-section-heading'>Manage Rates</p>

                {formState.rates.hourly
                    .sort((a, b) => (a.hour < b.hour ? -1 : 1))
                    .map(({ hour, amount }) => (
                        <Label key={`rate-${hour}`}>
                            {`Rate for ${ordinal(hour)} hour: `}
                            <NumericInput
                                defaultValue={amount}
                                fill
                                id={`rate-${hour}`}
                                min={0}
                                name={`rate-${hour}`}
                                onValueChange={(value: number) => {
                                    setFormState({
                                        ...formState,
                                        rates: {
                                            hourly: [
                                                ...formState.rates.hourly.filter(
                                                    (rate: HourlyRate) => rate.hour !== hour
                                                ),
                                                { hour, amount: value }
                                            ],
                                            remaining: formState.rates.remaining
                                        }
                                    })
                                }}
                                required
                            />
                        </Label>
                    ))}

                <Button
                    className='add-additional-rate-button'
                    fill
                    onClick={(event: MouseEvent) => {
                        event.preventDefault()
                        setFormState({
                            ...formState,
                            rates: {
                                ...formState.rates,
                                hourly: [
                                    ...formState.rates.hourly,
                                    {
                                        hour: formState.rates.hourly[formState.rates.hourly.length - 1].hour + 1,
                                        amount: 0
                                    }
                                ]
                            }
                        })
                    }}
                >
                    Add additional hourly rate
                </Button>

                <Label>
                    {`Rate for all hours after the ${ordinal(
                        formState.rates.hourly[formState.rates.hourly.length - 1].hour
                    )} hour: `}
                    <NumericInput
                        defaultValue={0}
                        fill
                        id='remaining-hours-rate'
                        min={0}
                        name='remaining-hours-rate'
                        onValueChange={(value: number) => {
                            setFormState({
                                ...formState,
                                rates: {
                                    ...formState.rates,
                                    remaining: value
                                }
                            })
                        }}
                        required
                    />
                </Label>

                <Button className='submit-button' large minimal type='submit'>
                    Submit
                </Button>
            </form>
        </Dialog>
    )
}

export default ParkingAddOrEditDialog
