import Rate from './rates.types'

type ParkingSpaceType = 'compact' | 'large' | 'handicapped' | 'motorcycle' | 'bicycle'

interface ParkingSpace {
    available: boolean
    floorId: string
    id: string
    name: string
    rates: Rate[]
    type: ParkingSpaceType
}

export default ParkingSpace
