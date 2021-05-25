import Rate from './rates.types'

type ParkingSpaceType = 'compact' | 'large' | 'handicapped' | 'motorcycle' | 'bicycle'

interface ParkingSpace {
    id: string
    floorId: string
    name: string
    rates: Rate[]
    type: ParkingSpaceType
}

export default ParkingSpace
