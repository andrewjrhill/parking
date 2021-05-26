import Rates from './rates.types'

export type ParkingSpaceType = 'compact' | 'large' | 'handicapped' | 'motorcycle' | 'bicycle'

interface ParkingSpace {
    available: boolean
    floorId: string
    id: string
    name: string
    rates: Rates
    type: ParkingSpaceType
}

export default ParkingSpace
