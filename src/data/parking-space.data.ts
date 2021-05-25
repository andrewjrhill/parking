import ParkingSpace from '../types/parking-space.types'

const PARKING_SPACE_DATA: ParkingSpace[] = [
    {
        available: true,
        floorId: '1c090464-f0b7-4480-8be5-19264a42bbda',
        id: '726f5874-3a37-4266-b7e4-fb1195e703b4',
        name: 'P101',
        rates: [
            { amount: 50, hour: 1 },
            { amount: 30, hour: 2 },
            { amount: 30, hour: 3 },
            { amount: 10, hour: 4 }
        ],
        type: 'compact'
    },
    {
        available: true,
        floorId: '1c090464-f0b7-4480-8be5-19264a42bbda',
        id: '4130a65d-206c-456e-acf7-d56cf08440c9',
        name: 'P102',
        rates: [
            { amount: 50, hour: 1 },
            { amount: 30, hour: 2 },
            { amount: 30, hour: 3 },
            { amount: 10, hour: 4 }
        ],
        type: 'compact'
    },
    {
        available: true,
        floorId: '1c090464-f0b7-4480-8be5-19264a42bbda',
        id: 'b9b48b07-ff70-491e-b397-48f16b8259f7',
        name: 'P103',
        rates: [
            { amount: 50, hour: 1 },
            { amount: 30, hour: 2 },
            { amount: 30, hour: 3 },
            { amount: 10, hour: 4 }
        ],
        type: 'compact'
    },
    {
        available: false,
        floorId: '1c090464-f0b7-4480-8be5-19264a42bbda',
        id: 'c7563fb2-a04b-4c76-a3d4-a4ddd9fff135',
        name: 'P104',
        rates: [
            { amount: 50, hour: 1 },
            { amount: 30, hour: 2 },
            { amount: 30, hour: 3 },
            { amount: 10, hour: 4 }
        ],
        type: 'compact'
    },
    {
        available: false,
        floorId: '1c090464-f0b7-4480-8be5-19264a42bbda',
        id: '1417ca9c-110e-41db-866a-4ba01b8e7fac',
        name: 'P105',
        rates: [
            { amount: 50, hour: 1 },
            { amount: 30, hour: 2 },
            { amount: 30, hour: 3 },
            { amount: 10, hour: 4 }
        ],
        type: 'compact'
    },
    {
        available: true,
        floorId: '1c090464-f0b7-4480-8be5-19264a42bbda',
        id: '90523ba0-1f71-4d4f-80d8-6be98a394f1e',
        name: 'P106',
        rates: [
            { amount: 50, hour: 1 },
            { amount: 30, hour: 2 },
            { amount: 30, hour: 3 },
            { amount: 10, hour: 4 }
        ],
        type: 'large'
    },
    {
        available: true,
        floorId: '1c090464-f0b7-4480-8be5-19264a42bbda',
        id: '196767bb-f1ad-4037-9fb7-82c4b85cdcc7',
        name: 'P107',
        rates: [
            { amount: 50, hour: 1 },
            { amount: 30, hour: 2 },
            { amount: 30, hour: 3 },
            { amount: 10, hour: 4 }
        ],
        type: 'large'
    },
    {
        available: true,
        floorId: '1c090464-f0b7-4480-8be5-19264a42bbda',
        id: 'dc9d1d55-443b-4def-af73-f8158397ffd9',
        name: 'P108',
        rates: [
            { amount: 50, hour: 1 },
            { amount: 30, hour: 2 },
            { amount: 30, hour: 3 },
            { amount: 10, hour: 4 }
        ],
        type: 'large'
    },
    {
        available: true,
        floorId: '1c090464-f0b7-4480-8be5-19264a42bbda',
        id: '43ff8261-2770-41fe-a061-181b02039224',
        name: 'P109',
        rates: [
            { amount: 50, hour: 1 },
            { amount: 30, hour: 2 },
            { amount: 30, hour: 3 },
            { amount: 10, hour: 4 }
        ],
        type: 'handicapped'
    },
    {
        available: true,
        floorId: '1c090464-f0b7-4480-8be5-19264a42bbda',
        id: 'bd91dd9e-f90e-45d8-892e-223776836cf0',
        name: 'P110',
        rates: [
            { amount: 50, hour: 1 },
            { amount: 30, hour: 2 },
            { amount: 30, hour: 3 },
            { amount: 10, hour: 4 }
        ],
        type: 'handicapped'
    },
    {
        available: true,
        floorId: '1c090464-f0b7-4480-8be5-19264a42bbda',
        id: '9dd06968-c033-4e2a-9d2e-ada847119145',
        name: 'P111',
        rates: [
            { amount: 50, hour: 1 },
            { amount: 30, hour: 2 },
            { amount: 30, hour: 3 },
            { amount: 10, hour: 4 }
        ],
        type: 'motorcycle'
    },
    {
        available: true,
        floorId: '1c090464-f0b7-4480-8be5-19264a42bbda',
        id: 'e5e110ea-a1f9-42fa-acd1-272b80a9bf01',
        name: 'P112',
        rates: [
            { amount: 50, hour: 1 },
            { amount: 30, hour: 2 },
            { amount: 30, hour: 3 },
            { amount: 10, hour: 4 }
        ],
        type: 'motorcycle'
    },
    {
        available: true,
        floorId: '1c090464-f0b7-4480-8be5-19264a42bbda',
        id: '8985d2f9-a9aa-4ac3-ae28-033b55117bf3',
        name: 'P113',
        rates: [
            { amount: 50, hour: 1 },
            { amount: 30, hour: 2 },
            { amount: 30, hour: 3 },
            { amount: 10, hour: 4 }
        ],
        type: 'bicycle'
    },
    {
        available: true,
        floorId: '1c090464-f0b7-4480-8be5-19264a42bbda',
        id: 'd69c46f8-9962-4952-a7f3-15460c491209',
        name: 'P114',
        rates: [
            { amount: 50, hour: 1 },
            { amount: 30, hour: 2 },
            { amount: 30, hour: 3 },
            { amount: 10, hour: 4 }
        ],
        type: 'bicycle'
    }
]

export default PARKING_SPACE_DATA
