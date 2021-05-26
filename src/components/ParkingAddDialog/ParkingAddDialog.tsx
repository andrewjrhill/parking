import React, { MouseEvent, SyntheticEvent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Button, Dialog, HTMLSelect, InputGroup, Label, NumericInput } from '@blueprintjs/core'
import { matchPath, useLocation } from 'react-router-dom'
import FLOOR_DATA from '../../data/floors.data'
import Floor from '../../types/floor.types'
import CloseButton from '../CloseButton/CloseButton'
import './ParkingAddDialog.scss'
import { capitalize, uniq } from 'lodash'
import PARKING_SPACE_DATA from '../../data/parking-space.data'
import ParkingSpace, { ParkingSpaceType } from '../../types/parking-space.types'
import ordinal from 'ordinal'
import Rates, { HourlyRate } from '../../types/rates.types'

interface Props {
    isOpen: boolean
    onClose: () => void
}

const initialFormState = {
    available: true,
    name: '',
    rates: {
        hourly: [{ hour: 1, amount: 0 }],
        remaining: 0
    },
    type: 'compact' as ParkingSpaceType
}

const ParkingAddDialog: React.FC<Props> = ({ isOpen, onClose }) => {
    const { pathname } = useLocation()
    const path = matchPath(pathname, { path: '/floor/:id' })

    const [name, setName] = useState<string>(initialFormState.name)
    const [type, setType] = useState<ParkingSpaceType>(initialFormState.type)
    const [available, setAvailable] = useState<boolean>(initialFormState.available)
    const [rates, setRates] = useState<Rates>(initialFormState.rates)

    const currentFloor = !!path
        ? FLOOR_DATA.find((floor: Floor) => (path?.params as { id: string }).id === floor.id)
        : undefined

    const parkingSpaceTypes = uniq(
        PARKING_SPACE_DATA.map((parkingSpace: ParkingSpace) => capitalize(parkingSpace.type))
    )

    const resetForm = () => {
        setName(initialFormState.name)
        setType(initialFormState.type)
        setAvailable(initialFormState.available)
        setRates(initialFormState.rates)
    }

    const onSubmit = (event: SyntheticEvent) => {
        event.preventDefault()

        if (!currentFloor) throw new Error('Error: current floor not found!')

        const payload = {
            available,
            floorId: currentFloor.id,
            id: uuidv4(),
            name,
            rates,
            type: type.toLowerCase() as ParkingSpaceType
        }

        PARKING_SPACE_DATA.push(payload)

        onClose()
        resetForm()
    }

    return (
        <Dialog className='parking-add-dialog' isOpen={isOpen} onClose={onClose}>
            <CloseButton onClick={onClose} />

            <p className='title'>Add Parking Space</p>
            <p className='subtitle'>You are adding a new parking space to {currentFloor?.name}</p>

            <form className='form' onSubmit={onSubmit}>
                <p className='form-section-heading'>General Information</p>

                <Label>
                    Name:
                    <InputGroup
                        fill
                        id='name'
                        name='name'
                        onChange={event => setName(event.currentTarget.value)}
                        placeholder='e.g. P314'
                        required
                        defaultValue={name}
                    />
                </Label>

                <div className='side-by-side'>
                    <Label>
                        Type:
                        <HTMLSelect
                            defaultValue={capitalize(type)}
                            fill
                            id='type'
                            name='type'
                            onChange={event => setType(event.currentTarget.value as ParkingSpaceType)}
                            options={parkingSpaceTypes}
                            required
                        />
                    </Label>

                    <Label>
                        Availability:
                        <HTMLSelect
                            defaultValue={available ? 'Available' : 'Unavailable'}
                            fill
                            id='available'
                            name='available'
                            onChange={event => {
                                if (event.currentTarget.value === 'available') return setAvailable(true)
                                else return setAvailable(false)
                            }}
                            options={['Available', 'Unavailable']}
                            required
                        />
                    </Label>
                </div>

                <p className='form-section-heading'>Manage Rates</p>

                {rates.hourly
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
                                    console.log(rates.hourly)
                                    setRates({
                                        hourly: [
                                            ...rates.hourly.filter((rate: HourlyRate) => rate.hour !== hour),
                                            { hour, amount: value }
                                        ],
                                        remaining: rates.remaining
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
                        setRates({
                            ...rates,
                            hourly: [
                                ...rates.hourly,
                                {
                                    hour: rates.hourly[rates.hourly.length - 1].hour + 1,
                                    amount: 0
                                }
                            ]
                        })
                    }}
                >
                    Add additional hourly rate
                </Button>

                <Label>
                    {`Rate for all hours after the ${ordinal(rates.hourly[rates.hourly.length - 1].hour)} hour: `}
                    <NumericInput
                        defaultValue={0}
                        fill
                        id='remaining-hours-rate'
                        min={0}
                        name='remaining-hours-rate'
                        onValueChange={(value: number) => {
                            setRates({
                                ...rates,
                                remaining: value
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

export default ParkingAddDialog
