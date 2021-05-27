import Rates from './rates.types'

export type ParkingSpaceAvailability = 'available' | 'unavailable'
export type ParkingSpaceType = 'compact' | 'large' | 'handicapped' | 'motorcycle' | 'bicycle'

interface ParkingSpace {
    availability: ParkingSpaceAvailability
    floorId: string
    id: string
    name: string
    rates: Rates
    type: ParkingSpaceType
}

export default ParkingSpace
