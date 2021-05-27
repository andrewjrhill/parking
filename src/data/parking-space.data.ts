import ParkingSpace from '../types/parking-space.types'

const DEFAULT_RATES = {
    hourly: [
        { amount: 50, hour: 1 },
        { amount: 30, hour: 2 },
        { amount: 30, hour: 3 },
        { amount: 10, hour: 4 }
    ],
    remaining: 10
}

const PARKING_SPACE_DATA: ParkingSpace[] = [
    {
        availability: 'available',
        floorId: '2a1522bd-623c-48fd-bf57-ede8b6ed9428',
        id: '35ecaea6-7754-4541-805c-c2a05b2b0c92',
        name: 'P066',
        rates: DEFAULT_RATES,
        type: 'large'
    },
    {
        availability: 'unavailable',
        floorId: '1c090464-f0b7-4480-8be5-19264a42bbda',
        id: 'ee615f5d-81dc-4805-ace5-b76e00465f33',
        name: 'P894',
        rates: DEFAULT_RATES,
        type: 'large'
    },
    {
        availability: 'available',
        floorId: '6f34c462-d014-4647-94fe-2199a9234a8f',
        id: 'c09056a8-82f4-430a-9afa-42b5a51ae63e',
        name: 'P539',
        rates: DEFAULT_RATES,
        type: 'large'
    },
    {
        availability: 'unavailable',
        floorId: '6f34c462-d014-4647-94fe-2199a9234a8f',
        id: 'b176cf93-4b3c-4510-aba7-253abf235282',
        name: 'P653',
        rates: DEFAULT_RATES,
        type: 'handicapped'
    },
    {
        availability: 'available',
        floorId: '1c090464-f0b7-4480-8be5-19264a42bbda',
        id: 'ecd5f009-3e7c-42f5-b8f0-62aec129ea94',
        name: 'P914',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'available',
        floorId: '7000c4ea-a523-4ac2-8a0a-e2edf50c0114',
        id: 'f08bec1c-3f95-48cf-99d2-3121150446f5',
        name: 'P014',
        rates: DEFAULT_RATES,
        type: 'motorcycle'
    },
    {
        availability: 'available',
        floorId: '894be5e0-c907-4a95-9a6b-b301bf3133e6',
        id: '8e8df755-e306-4494-8d64-ec876786179c',
        name: 'P664',
        rates: DEFAULT_RATES,
        type: 'motorcycle'
    },
    {
        availability: 'unavailable',
        floorId: '894be5e0-c907-4a95-9a6b-b301bf3133e6',
        id: '9ee8e265-6587-465c-b9d1-4cd77fc45d33',
        name: 'P513',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'unavailable',
        floorId: '6f34c462-d014-4647-94fe-2199a9234a8f',
        id: '0e438c87-f0ac-42fa-86e9-209e99da441e',
        name: 'P509',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'available',
        floorId: '7000c4ea-a523-4ac2-8a0a-e2edf50c0114',
        id: '3eb31c77-ec15-4ca6-8348-68c634a7b4ef',
        name: 'P882',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'available',
        floorId: '894be5e0-c907-4a95-9a6b-b301bf3133e6',
        id: 'b41b045e-f763-4aac-97a2-ecae5a1479cd',
        name: 'P702',
        rates: DEFAULT_RATES,
        type: 'bicycle'
    },
    {
        availability: 'unavailable',
        floorId: '1c090464-f0b7-4480-8be5-19264a42bbda',
        id: '04221dab-bb4e-4892-a648-6a9578cbb233',
        name: 'P829',
        rates: DEFAULT_RATES,
        type: 'motorcycle'
    },
    {
        availability: 'available',
        floorId: '2a1522bd-623c-48fd-bf57-ede8b6ed9428',
        id: '3cd24efa-e03f-4e04-981f-a38d05ced3ac',
        name: 'P494',
        rates: DEFAULT_RATES,
        type: 'bicycle'
    },
    {
        availability: 'unavailable',
        floorId: '2a1522bd-623c-48fd-bf57-ede8b6ed9428',
        id: 'a3a01432-e4a8-4915-9de7-69d93078d275',
        name: 'P681',
        rates: DEFAULT_RATES,
        type: 'bicycle'
    },
    {
        availability: 'available',
        floorId: '894be5e0-c907-4a95-9a6b-b301bf3133e6',
        id: '0de0a6e3-d483-4c13-a36d-42b2a40c517b',
        name: 'P523',
        rates: DEFAULT_RATES,
        type: 'motorcycle'
    },
    {
        availability: 'unavailable',
        floorId: '6f34c462-d014-4647-94fe-2199a9234a8f',
        id: 'b75504ad-c497-478f-a11a-82873fd2462d',
        name: 'P827',
        rates: DEFAULT_RATES,
        type: 'motorcycle'
    },
    {
        availability: 'unavailable',
        floorId: '7000c4ea-a523-4ac2-8a0a-e2edf50c0114',
        id: '23a88540-e9d7-409d-b7f4-c8fa89b322e6',
        name: 'P064',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'available',
        floorId: '6f34c462-d014-4647-94fe-2199a9234a8f',
        id: '38311f2d-4b66-4ed2-adc8-069e2fe1ff05',
        name: 'P744',
        rates: DEFAULT_RATES,
        type: 'motorcycle'
    },
    {
        availability: 'available',
        floorId: '1c090464-f0b7-4480-8be5-19264a42bbda',
        id: '8ba6d715-4ba5-4cd0-a8c5-1882b82942fc',
        name: 'P068',
        rates: DEFAULT_RATES,
        type: 'handicapped'
    },
    {
        availability: 'available',
        floorId: '7000c4ea-a523-4ac2-8a0a-e2edf50c0114',
        id: 'e6b75f60-7f84-4ce2-8c72-388144d9dcec',
        name: 'P316',
        rates: DEFAULT_RATES,
        type: 'bicycle'
    },
    {
        availability: 'available',
        floorId: '1c090464-f0b7-4480-8be5-19264a42bbda',
        id: '2fbe3b1f-6749-4985-baa1-2695ec5812e8',
        name: 'P708',
        rates: DEFAULT_RATES,
        type: 'motorcycle'
    },
    {
        availability: 'available',
        floorId: '894be5e0-c907-4a95-9a6b-b301bf3133e6',
        id: '445b208e-98bb-4f61-a939-fc631832352e',
        name: 'P479',
        rates: DEFAULT_RATES,
        type: 'bicycle'
    },
    {
        availability: 'unavailable',
        floorId: '7000c4ea-a523-4ac2-8a0a-e2edf50c0114',
        id: 'a720db3c-2989-4f0d-aa28-af05185c9dda',
        name: 'P352',
        rates: DEFAULT_RATES,
        type: 'bicycle'
    },
    {
        availability: 'available',
        floorId: '6f34c462-d014-4647-94fe-2199a9234a8f',
        id: '7ce4bff6-ec22-444b-9afb-d4a8f7534826',
        name: 'P854',
        rates: DEFAULT_RATES,
        type: 'handicapped'
    },
    {
        availability: 'unavailable',
        floorId: '7000c4ea-a523-4ac2-8a0a-e2edf50c0114',
        id: '27887e23-5613-4fd6-bbfe-b19b429569ed',
        name: 'P564',
        rates: DEFAULT_RATES,
        type: 'bicycle'
    },
    {
        availability: 'available',
        floorId: '1c090464-f0b7-4480-8be5-19264a42bbda',
        id: 'ac0e41b6-b0d5-4f36-ac9f-d96a19c67099',
        name: 'P039',
        rates: DEFAULT_RATES,
        type: 'handicapped'
    },
    {
        availability: 'available',
        floorId: '6f34c462-d014-4647-94fe-2199a9234a8f',
        id: '72992ded-2996-4cd3-80fe-920d5060ff92',
        name: 'P163',
        rates: DEFAULT_RATES,
        type: 'handicapped'
    },
    {
        availability: 'unavailable',
        floorId: '6f34c462-d014-4647-94fe-2199a9234a8f',
        id: 'c5d121b3-8b4d-4e21-bb30-cfff1ba563e5',
        name: 'P027',
        rates: DEFAULT_RATES,
        type: 'handicapped'
    },
    {
        availability: 'available',
        floorId: '2a1522bd-623c-48fd-bf57-ede8b6ed9428',
        id: '568cc949-e9d4-4d77-b90a-f2d1ce34ec6c',
        name: 'P372',
        rates: DEFAULT_RATES,
        type: 'large'
    },
    {
        availability: 'unavailable',
        floorId: '2a1522bd-623c-48fd-bf57-ede8b6ed9428',
        id: '8c0c1c87-65cf-4a61-be7a-a01b37711603',
        name: 'P133',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'available',
        floorId: '2a1522bd-623c-48fd-bf57-ede8b6ed9428',
        id: 'c9b40ae5-144c-43e3-96ac-95f1602c35e9',
        name: 'P990',
        rates: DEFAULT_RATES,
        type: 'large'
    },
    {
        availability: 'available',
        floorId: '7000c4ea-a523-4ac2-8a0a-e2edf50c0114',
        id: '63db3ef4-3942-405f-be22-fd783acba673',
        name: 'P845',
        rates: DEFAULT_RATES,
        type: 'handicapped'
    },
    {
        availability: 'available',
        floorId: '1c090464-f0b7-4480-8be5-19264a42bbda',
        id: '18e450f3-62bd-44cd-9a5b-4ca9c307aaa9',
        name: 'P257',
        rates: DEFAULT_RATES,
        type: 'bicycle'
    },
    {
        availability: 'available',
        floorId: '1c090464-f0b7-4480-8be5-19264a42bbda',
        id: '71181c24-19ae-48bb-8f67-4242ea1289c9',
        name: 'P247',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'available',
        floorId: '894be5e0-c907-4a95-9a6b-b301bf3133e6',
        id: 'ddf0444a-3aa5-4d99-931c-6947fefd992a',
        name: 'P576',
        rates: DEFAULT_RATES,
        type: 'motorcycle'
    },
    {
        availability: 'unavailable',
        floorId: '7000c4ea-a523-4ac2-8a0a-e2edf50c0114',
        id: '57b8a6b4-ecf2-43c1-b704-d6b6347bac20',
        name: 'P079',
        rates: DEFAULT_RATES,
        type: 'bicycle'
    },
    {
        availability: 'available',
        floorId: '7000c4ea-a523-4ac2-8a0a-e2edf50c0114',
        id: '02a7f80b-6956-42cf-8665-305d973ea519',
        name: 'P557',
        rates: DEFAULT_RATES,
        type: 'handicapped'
    },
    {
        availability: 'unavailable',
        floorId: '1c090464-f0b7-4480-8be5-19264a42bbda',
        id: 'f1ff0890-35d9-4761-8b96-aa95267ac6c8',
        name: 'P895',
        rates: DEFAULT_RATES,
        type: 'large'
    },
    {
        availability: 'available',
        floorId: '7000c4ea-a523-4ac2-8a0a-e2edf50c0114',
        id: '8a053221-30ae-4f41-a7f6-a9a933f5f6c7',
        name: 'P920',
        rates: DEFAULT_RATES,
        type: 'handicapped'
    },
    {
        availability: 'available',
        floorId: '6f34c462-d014-4647-94fe-2199a9234a8f',
        id: 'a46cd075-3975-481c-b988-c43072f570f3',
        name: 'P120',
        rates: DEFAULT_RATES,
        type: 'bicycle'
    },
    {
        availability: 'unavailable',
        floorId: '1c090464-f0b7-4480-8be5-19264a42bbda',
        id: 'bf71c501-f3b7-43f5-b626-4abd56afcd38',
        name: 'P095',
        rates: DEFAULT_RATES,
        type: 'motorcycle'
    },
    {
        availability: 'available',
        floorId: '6f34c462-d014-4647-94fe-2199a9234a8f',
        id: '402710e8-5449-4b44-8b6f-c278bc2fe096',
        name: 'P776',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'unavailable',
        floorId: '1c090464-f0b7-4480-8be5-19264a42bbda',
        id: '737e8ed1-2d92-4822-89f6-a6241a1fb72d',
        name: 'P340',
        rates: DEFAULT_RATES,
        type: 'large'
    },
    {
        availability: 'unavailable',
        floorId: '894be5e0-c907-4a95-9a6b-b301bf3133e6',
        id: '0b2ace33-7b63-4464-812e-b337a1427142',
        name: 'P115',
        rates: DEFAULT_RATES,
        type: 'bicycle'
    },
    {
        availability: 'unavailable',
        floorId: '894be5e0-c907-4a95-9a6b-b301bf3133e6',
        id: '470f8677-9c08-4b0e-81fc-08837e044b72',
        name: 'P105',
        rates: DEFAULT_RATES,
        type: 'large'
    },
    {
        availability: 'available',
        floorId: '1c090464-f0b7-4480-8be5-19264a42bbda',
        id: '42005323-b542-4718-bc1f-f89cb79a023b',
        name: 'P211',
        rates: DEFAULT_RATES,
        type: 'large'
    },
    {
        availability: 'available',
        floorId: '7000c4ea-a523-4ac2-8a0a-e2edf50c0114',
        id: '41b46f8b-7a07-420d-a3da-34982db299af',
        name: 'P150',
        rates: DEFAULT_RATES,
        type: 'handicapped'
    },
    {
        availability: 'unavailable',
        floorId: '7000c4ea-a523-4ac2-8a0a-e2edf50c0114',
        id: '1e9a7994-301b-4a84-b6f4-d4d5a555de84',
        name: 'P960',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'available',
        floorId: '6f34c462-d014-4647-94fe-2199a9234a8f',
        id: 'b5d71f1f-9bb3-41dd-bd75-b3e402869684',
        name: 'P441',
        rates: DEFAULT_RATES,
        type: 'bicycle'
    },
    {
        availability: 'unavailable',
        floorId: '894be5e0-c907-4a95-9a6b-b301bf3133e6',
        id: 'afaee255-4e35-4db9-ad5c-38b16d5f2b60',
        name: 'P798',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'unavailable',
        floorId: '7000c4ea-a523-4ac2-8a0a-e2edf50c0114',
        id: 'd851e15f-16d0-4f95-9e39-f507be45f547',
        name: 'P443',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'available',
        floorId: '6f34c462-d014-4647-94fe-2199a9234a8f',
        id: '8db7cf29-d27d-42e4-b4d6-fd79653458b4',
        name: 'P772',
        rates: DEFAULT_RATES,
        type: 'bicycle'
    },
    {
        availability: 'available',
        floorId: '6f34c462-d014-4647-94fe-2199a9234a8f',
        id: '2b10d6f0-cd5c-45c3-9a92-45a5e8f548da',
        name: 'P665',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'available',
        floorId: '7000c4ea-a523-4ac2-8a0a-e2edf50c0114',
        id: '2bab9fff-2d7f-4a32-811b-216676dedb73',
        name: 'P130',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'available',
        floorId: '2a1522bd-623c-48fd-bf57-ede8b6ed9428',
        id: '33e5f96a-a918-4da7-898e-a84ac68eeb1f',
        name: 'P722',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'unavailable',
        floorId: '894be5e0-c907-4a95-9a6b-b301bf3133e6',
        id: 'c3396cf1-be5c-4bdc-b1ea-28840966ac24',
        name: 'P024',
        rates: DEFAULT_RATES,
        type: 'motorcycle'
    },
    {
        availability: 'available',
        floorId: '1c090464-f0b7-4480-8be5-19264a42bbda',
        id: 'bd21e39a-0d7e-4818-a5d6-31457255327b',
        name: 'P087',
        rates: DEFAULT_RATES,
        type: 'large'
    },
    {
        availability: 'unavailable',
        floorId: '2a1522bd-623c-48fd-bf57-ede8b6ed9428',
        id: '7db0c3fb-3ad3-44b2-b574-08b7275f5fe0',
        name: 'P441',
        rates: DEFAULT_RATES,
        type: 'bicycle'
    },
    {
        availability: 'available',
        floorId: '7000c4ea-a523-4ac2-8a0a-e2edf50c0114',
        id: '0711e1c7-3ff5-467d-be6d-7ef7ef8b7781',
        name: 'P101',
        rates: DEFAULT_RATES,
        type: 'motorcycle'
    },
    {
        availability: 'unavailable',
        floorId: '6f34c462-d014-4647-94fe-2199a9234a8f',
        id: '89887060-87aa-413a-aaeb-6ad453077dd7',
        name: 'P180',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'available',
        floorId: '7000c4ea-a523-4ac2-8a0a-e2edf50c0114',
        id: 'fb7105de-fd32-4636-966b-90e0ac9b3972',
        name: 'P430',
        rates: DEFAULT_RATES,
        type: 'bicycle'
    },
    {
        availability: 'available',
        floorId: '6f34c462-d014-4647-94fe-2199a9234a8f',
        id: 'e0637cad-e148-4cfd-a2e7-959a2bccfb77',
        name: 'P469',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'available',
        floorId: '2a1522bd-623c-48fd-bf57-ede8b6ed9428',
        id: 'eb48abd5-f116-4269-9394-eb8119741992',
        name: 'P791',
        rates: DEFAULT_RATES,
        type: 'motorcycle'
    },
    {
        availability: 'available',
        floorId: '2a1522bd-623c-48fd-bf57-ede8b6ed9428',
        id: 'd32117a4-30ef-4511-9c53-9a03fc4ff80f',
        name: 'P535',
        rates: DEFAULT_RATES,
        type: 'bicycle'
    },
    {
        availability: 'available',
        floorId: '6f34c462-d014-4647-94fe-2199a9234a8f',
        id: '2db14882-5cde-4523-9eb7-1ba645016b58',
        name: 'P984',
        rates: DEFAULT_RATES,
        type: 'large'
    },
    {
        availability: 'available',
        floorId: '1c090464-f0b7-4480-8be5-19264a42bbda',
        id: 'd4337976-54d8-4106-8c62-5de2e31827e2',
        name: 'P149',
        rates: DEFAULT_RATES,
        type: 'bicycle'
    },
    {
        availability: 'unavailable',
        floorId: '6f34c462-d014-4647-94fe-2199a9234a8f',
        id: '0510d879-a903-44b3-a469-e090a9f88765',
        name: 'P460',
        rates: DEFAULT_RATES,
        type: 'motorcycle'
    },
    {
        availability: 'available',
        floorId: '6f34c462-d014-4647-94fe-2199a9234a8f',
        id: '899d09d9-f05a-45ad-afe5-c39b3d58cc19',
        name: 'P790',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'available',
        floorId: '6f34c462-d014-4647-94fe-2199a9234a8f',
        id: '36e9aa07-6a22-4049-aa40-bc02f883e78e',
        name: 'P560',
        rates: DEFAULT_RATES,
        type: 'handicapped'
    },
    {
        availability: 'unavailable',
        floorId: '894be5e0-c907-4a95-9a6b-b301bf3133e6',
        id: 'ad11e3c4-373c-4b78-9da0-2e0434d30aca',
        name: 'P509',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'unavailable',
        floorId: '2a1522bd-623c-48fd-bf57-ede8b6ed9428',
        id: 'c63644b7-318d-40ba-a31c-e6e5b2a41cde',
        name: 'P843',
        rates: DEFAULT_RATES,
        type: 'motorcycle'
    },
    {
        availability: 'available',
        floorId: '894be5e0-c907-4a95-9a6b-b301bf3133e6',
        id: '8bab8738-2fd2-45cc-8e04-e3c16772c860',
        name: 'P476',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'unavailable',
        floorId: '894be5e0-c907-4a95-9a6b-b301bf3133e6',
        id: 'c043a9cc-ee9d-4a63-af26-e4f8b92c92c1',
        name: 'P350',
        rates: DEFAULT_RATES,
        type: 'bicycle'
    },
    {
        availability: 'unavailable',
        floorId: '894be5e0-c907-4a95-9a6b-b301bf3133e6',
        id: '508c4e6c-3c58-47a8-9959-7ea8768ac514',
        name: 'P302',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'unavailable',
        floorId: '2a1522bd-623c-48fd-bf57-ede8b6ed9428',
        id: 'f6a06d3f-0f10-45ae-b2d5-bd40cd0dd4d7',
        name: 'P285',
        rates: DEFAULT_RATES,
        type: 'large'
    },
    {
        availability: 'unavailable',
        floorId: '894be5e0-c907-4a95-9a6b-b301bf3133e6',
        id: '93284f51-8e08-48f4-a8b8-6fffae997632',
        name: 'P158',
        rates: DEFAULT_RATES,
        type: 'handicapped'
    },
    {
        availability: 'unavailable',
        floorId: '2a1522bd-623c-48fd-bf57-ede8b6ed9428',
        id: '406afd3c-490d-4cfa-b872-4fe0210df3e8',
        name: 'P216',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'available',
        floorId: '2a1522bd-623c-48fd-bf57-ede8b6ed9428',
        id: 'ac83ae69-9ef0-492e-bc0f-fa1325114fec',
        name: 'P689',
        rates: DEFAULT_RATES,
        type: 'motorcycle'
    },
    {
        availability: 'unavailable',
        floorId: '7000c4ea-a523-4ac2-8a0a-e2edf50c0114',
        id: 'cf5cfa75-4477-4fd3-a6e1-23fdd1f01eb4',
        name: 'P742',
        rates: DEFAULT_RATES,
        type: 'bicycle'
    },
    {
        availability: 'available',
        floorId: '1c090464-f0b7-4480-8be5-19264a42bbda',
        id: 'd7dd806b-e83a-4cd5-b88d-7cd8fcb03e64',
        name: 'P983',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'unavailable',
        floorId: '6f34c462-d014-4647-94fe-2199a9234a8f',
        id: 'cd11e7ce-e168-4399-b29a-b7a29aafa1d7',
        name: 'P854',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'available',
        floorId: '2a1522bd-623c-48fd-bf57-ede8b6ed9428',
        id: 'a685e198-0c48-4506-ae5c-d78242441518',
        name: 'P083',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'unavailable',
        floorId: '894be5e0-c907-4a95-9a6b-b301bf3133e6',
        id: '819ba3e3-7da3-4396-adad-82523c3e77cd',
        name: 'P565',
        rates: DEFAULT_RATES,
        type: 'motorcycle'
    },
    {
        availability: 'unavailable',
        floorId: '1c090464-f0b7-4480-8be5-19264a42bbda',
        id: 'fb718649-7d02-4c94-8fd7-dd3b30d82ae6',
        name: 'P029',
        rates: DEFAULT_RATES,
        type: 'large'
    },
    {
        availability: 'available',
        floorId: '1c090464-f0b7-4480-8be5-19264a42bbda',
        id: '4d529ee3-9ca0-4eb1-ad6a-e98a2bbdebb5',
        name: 'P553',
        rates: DEFAULT_RATES,
        type: 'bicycle'
    },
    {
        availability: 'available',
        floorId: '1c090464-f0b7-4480-8be5-19264a42bbda',
        id: '639ac8b0-275e-40a8-9344-9a9e08e8f09e',
        name: 'P967',
        rates: DEFAULT_RATES,
        type: 'motorcycle'
    },
    {
        availability: 'available',
        floorId: '894be5e0-c907-4a95-9a6b-b301bf3133e6',
        id: '02fa5c22-eaa5-4deb-ad8a-bb00b831bba3',
        name: 'P590',
        rates: DEFAULT_RATES,
        type: 'motorcycle'
    },
    {
        availability: 'available',
        floorId: '1c090464-f0b7-4480-8be5-19264a42bbda',
        id: 'e79bba91-b242-4c77-9246-56ed341eff0a',
        name: 'P673',
        rates: DEFAULT_RATES,
        type: 'large'
    },
    {
        availability: 'available',
        floorId: '1c090464-f0b7-4480-8be5-19264a42bbda',
        id: '9dab121c-8062-48fb-bce5-769229e5ebf3',
        name: 'P498',
        rates: DEFAULT_RATES,
        type: 'bicycle'
    },
    {
        availability: 'unavailable',
        floorId: '7000c4ea-a523-4ac2-8a0a-e2edf50c0114',
        id: '0ca86537-86ff-4588-948b-321ddee192aa',
        name: 'P645',
        rates: DEFAULT_RATES,
        type: 'bicycle'
    },
    {
        availability: 'unavailable',
        floorId: '6f34c462-d014-4647-94fe-2199a9234a8f',
        id: '46d67efe-7a25-476c-82ea-d3b0d2ec2f3f',
        name: 'P886',
        rates: DEFAULT_RATES,
        type: 'large'
    },
    {
        availability: 'available',
        floorId: '7000c4ea-a523-4ac2-8a0a-e2edf50c0114',
        id: 'e4bc27bf-5025-4c2e-a38e-d53ea953b002',
        name: 'P743',
        rates: DEFAULT_RATES,
        type: 'handicapped'
    },
    {
        availability: 'unavailable',
        floorId: '7000c4ea-a523-4ac2-8a0a-e2edf50c0114',
        id: '130d0894-341b-4327-b7fa-048575d9ece5',
        name: 'P515',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'available',
        floorId: '6f34c462-d014-4647-94fe-2199a9234a8f',
        id: '27f07f5a-1bed-486c-b9fa-d25feba1da79',
        name: 'P867',
        rates: DEFAULT_RATES,
        type: 'motorcycle'
    },
    {
        availability: 'available',
        floorId: '2a1522bd-623c-48fd-bf57-ede8b6ed9428',
        id: 'a3e34b9b-64e9-4e89-a685-2749347db32b',
        name: 'P674',
        rates: DEFAULT_RATES,
        type: 'motorcycle'
    },
    {
        availability: 'unavailable',
        floorId: '894be5e0-c907-4a95-9a6b-b301bf3133e6',
        id: '889ad172-1e25-4a53-82f1-bdabfb9a8445',
        name: 'P185',
        rates: DEFAULT_RATES,
        type: 'large'
    },
    {
        availability: 'unavailable',
        floorId: '6f34c462-d014-4647-94fe-2199a9234a8f',
        id: '58a51d2f-f4f0-4e8f-8d36-1962f80813ae',
        name: 'P597',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'unavailable',
        floorId: '6f34c462-d014-4647-94fe-2199a9234a8f',
        id: '7a432568-40be-44c6-b2f7-7dc64522d26d',
        name: 'P793',
        rates: DEFAULT_RATES,
        type: 'bicycle'
    },
    {
        availability: 'unavailable',
        floorId: '1c090464-f0b7-4480-8be5-19264a42bbda',
        id: '5767213d-64be-4781-b0a0-1d368e555093',
        name: 'P845',
        rates: DEFAULT_RATES,
        type: 'large'
    },
    {
        availability: 'unavailable',
        floorId: '6f34c462-d014-4647-94fe-2199a9234a8f',
        id: '327dc230-94ac-494d-a6bf-291bd0c15dd4',
        name: 'P703',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'available',
        floorId: '7000c4ea-a523-4ac2-8a0a-e2edf50c0114',
        id: '86471e3e-95e3-478b-955a-fb60f43faac3',
        name: 'P805',
        rates: DEFAULT_RATES,
        type: 'handicapped'
    },
    {
        availability: 'available',
        floorId: '7000c4ea-a523-4ac2-8a0a-e2edf50c0114',
        id: 'c1b8a3b3-ec4b-41a5-830d-d5b54927d324',
        name: 'P977',
        rates: DEFAULT_RATES,
        type: 'handicapped'
    },
    {
        availability: 'unavailable',
        floorId: '1c090464-f0b7-4480-8be5-19264a42bbda',
        id: 'd3ecb2bb-b404-40fa-8fc3-10ed698e2099',
        name: 'P879',
        rates: DEFAULT_RATES,
        type: 'handicapped'
    },
    {
        availability: 'available',
        floorId: '2a1522bd-623c-48fd-bf57-ede8b6ed9428',
        id: '90b70917-fe54-43b0-8aba-9aa03d6db826',
        name: 'P625',
        rates: DEFAULT_RATES,
        type: 'bicycle'
    },
    {
        availability: 'unavailable',
        floorId: '7000c4ea-a523-4ac2-8a0a-e2edf50c0114',
        id: '83ab9ef7-1688-4585-a268-e7ca463609e1',
        name: 'P136',
        rates: DEFAULT_RATES,
        type: 'handicapped'
    },
    {
        availability: 'available',
        floorId: '1c090464-f0b7-4480-8be5-19264a42bbda',
        id: 'c68c964d-fc07-45e1-91b3-b00953394e39',
        name: 'P804',
        rates: DEFAULT_RATES,
        type: 'motorcycle'
    },
    {
        availability: 'available',
        floorId: '6f34c462-d014-4647-94fe-2199a9234a8f',
        id: '46706f59-7dbf-4f9d-814c-b082802d55ba',
        name: 'P536',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'available',
        floorId: '7000c4ea-a523-4ac2-8a0a-e2edf50c0114',
        id: '3d39acc9-4de1-4df4-81a7-39949f28caa7',
        name: 'P303',
        rates: DEFAULT_RATES,
        type: 'large'
    },
    {
        availability: 'available',
        floorId: '1c090464-f0b7-4480-8be5-19264a42bbda',
        id: 'd79d9680-6499-4982-8568-3a0ba05b352e',
        name: 'P416',
        rates: DEFAULT_RATES,
        type: 'handicapped'
    },
    {
        availability: 'unavailable',
        floorId: '2a1522bd-623c-48fd-bf57-ede8b6ed9428',
        id: 'a64d7424-fbd1-473d-86a7-9ba65d1b1ade',
        name: 'P241',
        rates: DEFAULT_RATES,
        type: 'bicycle'
    },
    {
        availability: 'unavailable',
        floorId: '6f34c462-d014-4647-94fe-2199a9234a8f',
        id: 'd547e6bc-2d6a-4715-953c-9f38f519362f',
        name: 'P812',
        rates: DEFAULT_RATES,
        type: 'handicapped'
    },
    {
        availability: 'unavailable',
        floorId: '894be5e0-c907-4a95-9a6b-b301bf3133e6',
        id: 'bdb93762-64f0-48b6-b0f6-1ef461a5eff0',
        name: 'P230',
        rates: DEFAULT_RATES,
        type: 'bicycle'
    },
    {
        availability: 'unavailable',
        floorId: '894be5e0-c907-4a95-9a6b-b301bf3133e6',
        id: '96379707-4be8-4a45-babf-da613c094c46',
        name: 'P574',
        rates: DEFAULT_RATES,
        type: 'bicycle'
    },
    {
        availability: 'unavailable',
        floorId: '6f34c462-d014-4647-94fe-2199a9234a8f',
        id: '7f0ac345-5f3c-42f9-a3bb-b6a35205f84f',
        name: 'P877',
        rates: DEFAULT_RATES,
        type: 'large'
    },
    {
        availability: 'available',
        floorId: '6f34c462-d014-4647-94fe-2199a9234a8f',
        id: 'b5d0227d-4190-408f-92e0-8e129012f91f',
        name: 'P566',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'unavailable',
        floorId: '6f34c462-d014-4647-94fe-2199a9234a8f',
        id: 'a4e32238-91ee-41e2-aa33-c7ba98ad6199',
        name: 'P138',
        rates: DEFAULT_RATES,
        type: 'handicapped'
    },
    {
        availability: 'unavailable',
        floorId: '894be5e0-c907-4a95-9a6b-b301bf3133e6',
        id: 'd84fb661-af17-4a37-9f0b-a91d97daa6a5',
        name: 'P651',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'available',
        floorId: '7000c4ea-a523-4ac2-8a0a-e2edf50c0114',
        id: '71e3ec5b-b0d7-4863-ae05-f7df75f3e3d7',
        name: 'P205',
        rates: DEFAULT_RATES,
        type: 'large'
    },
    {
        availability: 'unavailable',
        floorId: '7000c4ea-a523-4ac2-8a0a-e2edf50c0114',
        id: '07ca68d4-46ce-4c91-bef9-c9da7fcd67e8',
        name: 'P820',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'available',
        floorId: '1c090464-f0b7-4480-8be5-19264a42bbda',
        id: '96c51eac-f89e-48f0-97a7-a6aa3a7ed7da',
        name: 'P794',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'unavailable',
        floorId: '894be5e0-c907-4a95-9a6b-b301bf3133e6',
        id: '282488de-c9d1-467f-97c4-97cb923d1bf4',
        name: 'P852',
        rates: DEFAULT_RATES,
        type: 'handicapped'
    },
    {
        availability: 'available',
        floorId: '2a1522bd-623c-48fd-bf57-ede8b6ed9428',
        id: 'cbde6bc4-a636-444d-aeec-30f6f6d4ac37',
        name: 'P479',
        rates: DEFAULT_RATES,
        type: 'handicapped'
    },
    {
        availability: 'unavailable',
        floorId: '894be5e0-c907-4a95-9a6b-b301bf3133e6',
        id: 'cc49444b-b3b6-4ea3-9e95-c4a36e681e09',
        name: 'P583',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'available',
        floorId: '1c090464-f0b7-4480-8be5-19264a42bbda',
        id: 'c6502a09-2953-4925-9a81-145877a41c29',
        name: 'P202',
        rates: DEFAULT_RATES,
        type: 'motorcycle'
    },
    {
        availability: 'available',
        floorId: '1c090464-f0b7-4480-8be5-19264a42bbda',
        id: '98ff5747-186b-4bb2-a95c-0d72df124b33',
        name: 'P932',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'unavailable',
        floorId: '6f34c462-d014-4647-94fe-2199a9234a8f',
        id: '732613db-225d-4f7c-88b8-4db58ddc1196',
        name: 'P669',
        rates: DEFAULT_RATES,
        type: 'bicycle'
    },
    {
        availability: 'unavailable',
        floorId: '1c090464-f0b7-4480-8be5-19264a42bbda',
        id: 'fea5fe5c-3b6a-4515-8079-7c9cb86e4729',
        name: 'P512',
        rates: DEFAULT_RATES,
        type: 'handicapped'
    },
    {
        availability: 'available',
        floorId: '6f34c462-d014-4647-94fe-2199a9234a8f',
        id: '768fea86-4b46-4376-a853-9a87ba80e61e',
        name: 'P307',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'available',
        floorId: '7000c4ea-a523-4ac2-8a0a-e2edf50c0114',
        id: '9938768c-87e4-49eb-bc9d-7f0534f2ce61',
        name: 'P072',
        rates: DEFAULT_RATES,
        type: 'handicapped'
    },
    {
        availability: 'available',
        floorId: '894be5e0-c907-4a95-9a6b-b301bf3133e6',
        id: 'cd8bd3df-b212-4380-8403-fdb264bf1a55',
        name: 'P655',
        rates: DEFAULT_RATES,
        type: 'motorcycle'
    },
    {
        availability: 'unavailable',
        floorId: '1c090464-f0b7-4480-8be5-19264a42bbda',
        id: '1a20e0c2-edb0-44f9-b188-82d12aa7c6d1',
        name: 'P802',
        rates: DEFAULT_RATES,
        type: 'bicycle'
    },
    {
        availability: 'available',
        floorId: '894be5e0-c907-4a95-9a6b-b301bf3133e6',
        id: '20773636-9eb3-4d89-ae4e-f4cfd9828342',
        name: 'P298',
        rates: DEFAULT_RATES,
        type: 'large'
    },
    {
        availability: 'available',
        floorId: '7000c4ea-a523-4ac2-8a0a-e2edf50c0114',
        id: 'd6e30627-f9ea-4606-8dec-a9c4f0c6a597',
        name: 'P880',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'available',
        floorId: '894be5e0-c907-4a95-9a6b-b301bf3133e6',
        id: '40af9116-b9bd-4478-ae48-50e181ac41fd',
        name: 'P902',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'available',
        floorId: '7000c4ea-a523-4ac2-8a0a-e2edf50c0114',
        id: '1b542717-534b-4de7-99a6-f39bf1d96a9d',
        name: 'P304',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'available',
        floorId: '6f34c462-d014-4647-94fe-2199a9234a8f',
        id: '95fc3f3c-24d1-4409-956d-c45463d920fd',
        name: 'P581',
        rates: DEFAULT_RATES,
        type: 'large'
    },
    {
        availability: 'unavailable',
        floorId: '1c090464-f0b7-4480-8be5-19264a42bbda',
        id: '563b2579-dbac-4977-bcf2-c7c61de17903',
        name: 'P422',
        rates: DEFAULT_RATES,
        type: 'large'
    },
    {
        availability: 'available',
        floorId: '6f34c462-d014-4647-94fe-2199a9234a8f',
        id: '0f0bee96-e67e-4742-8194-520562996589',
        name: 'P532',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'available',
        floorId: '7000c4ea-a523-4ac2-8a0a-e2edf50c0114',
        id: 'ddac9109-6f79-4a34-b49c-ea2d5ad2d34d',
        name: 'P814',
        rates: DEFAULT_RATES,
        type: 'handicapped'
    },
    {
        availability: 'unavailable',
        floorId: '7000c4ea-a523-4ac2-8a0a-e2edf50c0114',
        id: '6e2ddda9-ac97-4053-9a7e-a95ae921fddd',
        name: 'P449',
        rates: DEFAULT_RATES,
        type: 'handicapped'
    },
    {
        availability: 'unavailable',
        floorId: '2a1522bd-623c-48fd-bf57-ede8b6ed9428',
        id: 'fcc207b3-ac27-48db-989a-abf5f651b683',
        name: 'P695',
        rates: DEFAULT_RATES,
        type: 'large'
    },
    {
        availability: 'available',
        floorId: '894be5e0-c907-4a95-9a6b-b301bf3133e6',
        id: '92d5b703-0949-429e-b036-fc45f64cea32',
        name: 'P597',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'unavailable',
        floorId: '7000c4ea-a523-4ac2-8a0a-e2edf50c0114',
        id: 'cb34e2aa-7805-4f4c-b245-58688a6c1dea',
        name: 'P547',
        rates: DEFAULT_RATES,
        type: 'motorcycle'
    },
    {
        availability: 'available',
        floorId: '1c090464-f0b7-4480-8be5-19264a42bbda',
        id: 'f2c124b2-87a2-4600-b8ad-bcb74f0c635e',
        name: 'P930',
        rates: DEFAULT_RATES,
        type: 'bicycle'
    },
    {
        availability: 'unavailable',
        floorId: '1c090464-f0b7-4480-8be5-19264a42bbda',
        id: '35703894-58ee-4429-96b5-b7fc75568360',
        name: 'P877',
        rates: DEFAULT_RATES,
        type: 'large'
    },
    {
        availability: 'available',
        floorId: '6f34c462-d014-4647-94fe-2199a9234a8f',
        id: '10c6c1f8-db19-41dd-b0ff-0268e0c3f030',
        name: 'P425',
        rates: DEFAULT_RATES,
        type: 'handicapped'
    },
    {
        availability: 'available',
        floorId: '894be5e0-c907-4a95-9a6b-b301bf3133e6',
        id: '7edad68d-8a1b-407a-9ad8-f8d38f2bbae0',
        name: 'P424',
        rates: DEFAULT_RATES,
        type: 'bicycle'
    },
    {
        availability: 'unavailable',
        floorId: '894be5e0-c907-4a95-9a6b-b301bf3133e6',
        id: '824f49aa-cf7c-4964-b2bd-55c1940904ce',
        name: 'P076',
        rates: DEFAULT_RATES,
        type: 'motorcycle'
    },
    {
        availability: 'unavailable',
        floorId: '7000c4ea-a523-4ac2-8a0a-e2edf50c0114',
        id: '7ccb0d6f-270e-4fb5-b460-2f88c3fe43a1',
        name: 'P473',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'available',
        floorId: '894be5e0-c907-4a95-9a6b-b301bf3133e6',
        id: '394e2c74-dfa9-4db2-9b61-55ead3b51dc3',
        name: 'P289',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'unavailable',
        floorId: '7000c4ea-a523-4ac2-8a0a-e2edf50c0114',
        id: '893ba89c-59af-4949-9ddb-6ec7d7c8641b',
        name: 'P761',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'unavailable',
        floorId: '6f34c462-d014-4647-94fe-2199a9234a8f',
        id: '00f3e42d-1b16-4652-8ae1-b9f497c6a6b0',
        name: 'P635',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'unavailable',
        floorId: '1c090464-f0b7-4480-8be5-19264a42bbda',
        id: '11726b07-0820-4993-9951-44dcce0895e5',
        name: 'P445',
        rates: DEFAULT_RATES,
        type: 'motorcycle'
    },
    {
        availability: 'available',
        floorId: '2a1522bd-623c-48fd-bf57-ede8b6ed9428',
        id: '88355fa1-b73b-4ce7-86d2-f8af696b6e8e',
        name: 'P034',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'unavailable',
        floorId: '7000c4ea-a523-4ac2-8a0a-e2edf50c0114',
        id: '9aadec12-59c0-4fbf-83ca-462be3c7271c',
        name: 'P943',
        rates: DEFAULT_RATES,
        type: 'large'
    },
    {
        availability: 'unavailable',
        floorId: '6f34c462-d014-4647-94fe-2199a9234a8f',
        id: '4e8ee3c6-6713-4a53-94f2-24e4ad731c16',
        name: 'P442',
        rates: DEFAULT_RATES,
        type: 'motorcycle'
    },
    {
        availability: 'unavailable',
        floorId: '7000c4ea-a523-4ac2-8a0a-e2edf50c0114',
        id: '6f7c5f38-578f-442d-b34e-471c937b141b',
        name: 'P556',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'available',
        floorId: '6f34c462-d014-4647-94fe-2199a9234a8f',
        id: '9bebea93-9028-4ba0-b1ee-a8d4624064ab',
        name: 'P930',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'unavailable',
        floorId: '894be5e0-c907-4a95-9a6b-b301bf3133e6',
        id: '833b427a-ba50-4d34-9fa7-6eb8794827d2',
        name: 'P890',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'unavailable',
        floorId: '1c090464-f0b7-4480-8be5-19264a42bbda',
        id: 'ff748a80-42c0-4f63-85e7-949a43d2e27d',
        name: 'P406',
        rates: DEFAULT_RATES,
        type: 'large'
    },
    {
        availability: 'available',
        floorId: '2a1522bd-623c-48fd-bf57-ede8b6ed9428',
        id: '58c6145f-0b8f-4114-ac57-d480caa32da4',
        name: 'P254',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'unavailable',
        floorId: '894be5e0-c907-4a95-9a6b-b301bf3133e6',
        id: '3b98520f-adcf-4487-a428-9cdfa3c7aaac',
        name: 'P313',
        rates: DEFAULT_RATES,
        type: 'handicapped'
    },
    {
        availability: 'unavailable',
        floorId: '7000c4ea-a523-4ac2-8a0a-e2edf50c0114',
        id: '9ca311e5-860c-4693-a814-38dd990eae6e',
        name: 'P801',
        rates: DEFAULT_RATES,
        type: 'motorcycle'
    },
    {
        availability: 'unavailable',
        floorId: '2a1522bd-623c-48fd-bf57-ede8b6ed9428',
        id: '82c858d4-3fe9-4030-8e5d-6a055f62f8e5',
        name: 'P599',
        rates: DEFAULT_RATES,
        type: 'handicapped'
    },
    {
        availability: 'available',
        floorId: '7000c4ea-a523-4ac2-8a0a-e2edf50c0114',
        id: '3a9954da-03f1-4d38-b546-c6cdfc100b06',
        name: 'P047',
        rates: DEFAULT_RATES,
        type: 'bicycle'
    },
    {
        availability: 'available',
        floorId: '894be5e0-c907-4a95-9a6b-b301bf3133e6',
        id: '70cbde82-0aaa-4d58-8130-24470d61cc7a',
        name: 'P953',
        rates: DEFAULT_RATES,
        type: 'bicycle'
    },
    {
        availability: 'available',
        floorId: '7000c4ea-a523-4ac2-8a0a-e2edf50c0114',
        id: '1efc0166-93ed-4655-9055-09436e603ddb',
        name: 'P543',
        rates: DEFAULT_RATES,
        type: 'large'
    },
    {
        availability: 'unavailable',
        floorId: '6f34c462-d014-4647-94fe-2199a9234a8f',
        id: '3fc80771-a022-4061-b399-d00c9efabd69',
        name: 'P739',
        rates: DEFAULT_RATES,
        type: 'handicapped'
    },
    {
        availability: 'unavailable',
        floorId: '7000c4ea-a523-4ac2-8a0a-e2edf50c0114',
        id: 'd3479a7e-5b29-460c-bcb5-f542f6171042',
        name: 'P849',
        rates: DEFAULT_RATES,
        type: 'large'
    },
    {
        availability: 'available',
        floorId: '2a1522bd-623c-48fd-bf57-ede8b6ed9428',
        id: '2c229128-a45f-4ca5-8220-aaf4f0d1d272',
        name: 'P723',
        rates: DEFAULT_RATES,
        type: 'bicycle'
    },
    {
        availability: 'available',
        floorId: '1c090464-f0b7-4480-8be5-19264a42bbda',
        id: 'd2df2439-0b87-4cd1-8eb8-dad321994554',
        name: 'P406',
        rates: DEFAULT_RATES,
        type: 'motorcycle'
    },
    {
        availability: 'available',
        floorId: '7000c4ea-a523-4ac2-8a0a-e2edf50c0114',
        id: 'ca9b2d9b-518c-4b95-a1db-edb2312c2755',
        name: 'P308',
        rates: DEFAULT_RATES,
        type: 'handicapped'
    },
    {
        availability: 'available',
        floorId: '7000c4ea-a523-4ac2-8a0a-e2edf50c0114',
        id: '644cc449-b71b-46aa-a838-dd3aa5665f91',
        name: 'P613',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'unavailable',
        floorId: '6f34c462-d014-4647-94fe-2199a9234a8f',
        id: '595cf0a2-5607-4da2-b712-b591c9e081c0',
        name: 'P109',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'unavailable',
        floorId: '894be5e0-c907-4a95-9a6b-b301bf3133e6',
        id: '2d26bb42-dd5f-407f-9814-a466c14c58a9',
        name: 'P191',
        rates: DEFAULT_RATES,
        type: 'large'
    },
    {
        availability: 'available',
        floorId: '7000c4ea-a523-4ac2-8a0a-e2edf50c0114',
        id: '3a98a41d-f801-43ae-9d92-04fa54a458b6',
        name: 'P679',
        rates: DEFAULT_RATES,
        type: 'handicapped'
    },
    {
        availability: 'available',
        floorId: '7000c4ea-a523-4ac2-8a0a-e2edf50c0114',
        id: '045fd7da-cbf3-474d-b897-8ddb8db94baf',
        name: 'P469',
        rates: DEFAULT_RATES,
        type: 'large'
    },
    {
        availability: 'available',
        floorId: '6f34c462-d014-4647-94fe-2199a9234a8f',
        id: 'fdc71064-0439-42e2-8a7c-e3c323a05335',
        name: 'P229',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'unavailable',
        floorId: '2a1522bd-623c-48fd-bf57-ede8b6ed9428',
        id: '40383312-faf3-49a0-a4a3-ef44ef8dbfa6',
        name: 'P547',
        rates: DEFAULT_RATES,
        type: 'motorcycle'
    },
    {
        availability: 'available',
        floorId: '7000c4ea-a523-4ac2-8a0a-e2edf50c0114',
        id: '56e44334-dea6-40c4-acf4-153d8c3a4aef',
        name: 'P302',
        rates: DEFAULT_RATES,
        type: 'large'
    },
    {
        availability: 'available',
        floorId: '6f34c462-d014-4647-94fe-2199a9234a8f',
        id: '7c105d7b-f10e-4e4e-9775-f3bb9546fc5c',
        name: 'P875',
        rates: DEFAULT_RATES,
        type: 'bicycle'
    },
    {
        availability: 'available',
        floorId: '2a1522bd-623c-48fd-bf57-ede8b6ed9428',
        id: 'ded8e1be-416a-4ce7-a81e-fbea9ff9da0c',
        name: 'P521',
        rates: DEFAULT_RATES,
        type: 'motorcycle'
    },
    {
        availability: 'available',
        floorId: '6f34c462-d014-4647-94fe-2199a9234a8f',
        id: 'f0c3d86b-4609-4be3-86e2-47bef01aa015',
        name: 'P065',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'available',
        floorId: '7000c4ea-a523-4ac2-8a0a-e2edf50c0114',
        id: 'd9b05d60-1825-4a1d-a497-c5dd7abde419',
        name: 'P259',
        rates: DEFAULT_RATES,
        type: 'handicapped'
    },
    {
        availability: 'unavailable',
        floorId: '2a1522bd-623c-48fd-bf57-ede8b6ed9428',
        id: 'bcb7573b-c93b-463b-b80c-6271559d59d1',
        name: 'P930',
        rates: DEFAULT_RATES,
        type: 'large'
    },
    {
        availability: 'unavailable',
        floorId: '894be5e0-c907-4a95-9a6b-b301bf3133e6',
        id: 'df32990b-23c3-4be3-b70d-4be08939a706',
        name: 'P749',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'available',
        floorId: '6f34c462-d014-4647-94fe-2199a9234a8f',
        id: 'd5405c4a-dee1-468c-b013-1f75671a9679',
        name: 'P012',
        rates: DEFAULT_RATES,
        type: 'bicycle'
    },
    {
        availability: 'unavailable',
        floorId: '7000c4ea-a523-4ac2-8a0a-e2edf50c0114',
        id: '26aaac12-dc19-4341-9107-eb7afb6895c1',
        name: 'P238',
        rates: DEFAULT_RATES,
        type: 'bicycle'
    },
    {
        availability: 'unavailable',
        floorId: '6f34c462-d014-4647-94fe-2199a9234a8f',
        id: '9982fc79-f366-47f5-ad3e-52700a1d5de9',
        name: 'P333',
        rates: DEFAULT_RATES,
        type: 'large'
    },
    {
        availability: 'available',
        floorId: '1c090464-f0b7-4480-8be5-19264a42bbda',
        id: '8a93862e-e957-4582-a9d2-e9fca0587ae4',
        name: 'P404',
        rates: DEFAULT_RATES,
        type: 'bicycle'
    },
    {
        availability: 'unavailable',
        floorId: '894be5e0-c907-4a95-9a6b-b301bf3133e6',
        id: '022cd9b7-0e2f-4311-a4fe-8e40e1ec6f8e',
        name: 'P589',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'available',
        floorId: '1c090464-f0b7-4480-8be5-19264a42bbda',
        id: '25b13cbd-cdb4-4209-8929-a68a52b7d821',
        name: 'P414',
        rates: DEFAULT_RATES,
        type: 'motorcycle'
    },
    {
        availability: 'unavailable',
        floorId: '894be5e0-c907-4a95-9a6b-b301bf3133e6',
        id: 'a51501aa-358e-4868-aaa0-f54073b9aad5',
        name: 'P165',
        rates: DEFAULT_RATES,
        type: 'large'
    },
    {
        availability: 'available',
        floorId: '6f34c462-d014-4647-94fe-2199a9234a8f',
        id: '49010a1b-f883-4e11-af1e-40dc39639147',
        name: 'P530',
        rates: DEFAULT_RATES,
        type: 'handicapped'
    },
    {
        availability: 'unavailable',
        floorId: '1c090464-f0b7-4480-8be5-19264a42bbda',
        id: 'f3e794c0-307e-4067-bdbe-72df86fc61fd',
        name: 'P936',
        rates: DEFAULT_RATES,
        type: 'large'
    },
    {
        availability: 'available',
        floorId: '894be5e0-c907-4a95-9a6b-b301bf3133e6',
        id: 'f99eccdf-8944-433d-9a93-ea1467bd599e',
        name: 'P784',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'unavailable',
        floorId: '6f34c462-d014-4647-94fe-2199a9234a8f',
        id: '2d67ca3d-0f18-4b0d-bd0a-c75a7f505900',
        name: 'P915',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'unavailable',
        floorId: '7000c4ea-a523-4ac2-8a0a-e2edf50c0114',
        id: 'fd12438b-4540-45ff-975a-f40eb92740fb',
        name: 'P455',
        rates: DEFAULT_RATES,
        type: 'motorcycle'
    },
    {
        availability: 'unavailable',
        floorId: '1c090464-f0b7-4480-8be5-19264a42bbda',
        id: 'a15c682b-c44c-43f0-8010-5b15a99b9990',
        name: 'P101',
        rates: DEFAULT_RATES,
        type: 'motorcycle'
    },
    {
        availability: 'unavailable',
        floorId: '7000c4ea-a523-4ac2-8a0a-e2edf50c0114',
        id: 'd998975b-cdd2-415f-aff0-76793b412f68',
        name: 'P030',
        rates: DEFAULT_RATES,
        type: 'bicycle'
    },
    {
        availability: 'available',
        floorId: '894be5e0-c907-4a95-9a6b-b301bf3133e6',
        id: '9ddaf15a-1dfd-43dc-b4b0-9b79f8c7dca8',
        name: 'P737',
        rates: DEFAULT_RATES,
        type: 'large'
    },
    {
        availability: 'available',
        floorId: '7000c4ea-a523-4ac2-8a0a-e2edf50c0114',
        id: '71a8ff1e-51c0-4136-926e-a5e48a9184f2',
        name: 'P861',
        rates: DEFAULT_RATES,
        type: 'large'
    },
    {
        availability: 'unavailable',
        floorId: '6f34c462-d014-4647-94fe-2199a9234a8f',
        id: '6a7b0978-13f5-40f5-ad6e-68eef95d7888',
        name: 'P807',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'unavailable',
        floorId: '6f34c462-d014-4647-94fe-2199a9234a8f',
        id: '7e3d47da-bc09-4921-a0f3-9c8672615d4a',
        name: 'P777',
        rates: DEFAULT_RATES,
        type: 'large'
    },
    {
        availability: 'unavailable',
        floorId: '2a1522bd-623c-48fd-bf57-ede8b6ed9428',
        id: 'c4d15e28-acc7-406a-bf4f-f21f7cf7e947',
        name: 'P967',
        rates: DEFAULT_RATES,
        type: 'large'
    },
    {
        availability: 'available',
        floorId: '1c090464-f0b7-4480-8be5-19264a42bbda',
        id: '05caadb2-a014-4cde-9df2-50b85a361afc',
        name: 'P952',
        rates: DEFAULT_RATES,
        type: 'motorcycle'
    },
    {
        availability: 'unavailable',
        floorId: '2a1522bd-623c-48fd-bf57-ede8b6ed9428',
        id: 'fd957e14-7610-43f5-b110-510dbb7996fe',
        name: 'P633',
        rates: DEFAULT_RATES,
        type: 'bicycle'
    },
    {
        availability: 'unavailable',
        floorId: '2a1522bd-623c-48fd-bf57-ede8b6ed9428',
        id: '176360e9-d5aa-46db-83ef-fb7d838f20c1',
        name: 'P526',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'unavailable',
        floorId: '2a1522bd-623c-48fd-bf57-ede8b6ed9428',
        id: 'a23bd739-181a-4581-94db-e17c2c1146d3',
        name: 'P506',
        rates: DEFAULT_RATES,
        type: 'handicapped'
    },
    {
        availability: 'available',
        floorId: '7000c4ea-a523-4ac2-8a0a-e2edf50c0114',
        id: '1f19929e-c834-472b-bafd-104a1485a0e7',
        name: 'P968',
        rates: DEFAULT_RATES,
        type: 'large'
    },
    {
        availability: 'unavailable',
        floorId: '894be5e0-c907-4a95-9a6b-b301bf3133e6',
        id: 'a28499d7-e603-497e-bb64-b947b883259b',
        name: 'P127',
        rates: DEFAULT_RATES,
        type: 'motorcycle'
    },
    {
        availability: 'available',
        floorId: '6f34c462-d014-4647-94fe-2199a9234a8f',
        id: '353f6533-01aa-4c67-b49a-1e059abf872a',
        name: 'P162',
        rates: DEFAULT_RATES,
        type: 'motorcycle'
    },
    {
        availability: 'unavailable',
        floorId: '1c090464-f0b7-4480-8be5-19264a42bbda',
        id: '4b7b51b2-2fae-4616-bbb0-b5753e4de52f',
        name: 'P759',
        rates: DEFAULT_RATES,
        type: 'handicapped'
    },
    {
        availability: 'available',
        floorId: '1c090464-f0b7-4480-8be5-19264a42bbda',
        id: '5d13bd88-dfaf-4624-b36d-2b9bd46bf119',
        name: 'P286',
        rates: DEFAULT_RATES,
        type: 'motorcycle'
    },
    {
        availability: 'available',
        floorId: '6f34c462-d014-4647-94fe-2199a9234a8f',
        id: '89c2d29b-4678-4a21-a4f1-d26370898ddd',
        name: 'P386',
        rates: DEFAULT_RATES,
        type: 'motorcycle'
    },
    {
        availability: 'available',
        floorId: '2a1522bd-623c-48fd-bf57-ede8b6ed9428',
        id: 'dd38d91b-63a3-47ad-b210-bc9ae87d726a',
        name: 'P346',
        rates: DEFAULT_RATES,
        type: 'handicapped'
    },
    {
        availability: 'unavailable',
        floorId: '7000c4ea-a523-4ac2-8a0a-e2edf50c0114',
        id: '9dce6ae8-9061-4303-8820-f623f67b5b0f',
        name: 'P489',
        rates: DEFAULT_RATES,
        type: 'large'
    },
    {
        availability: 'unavailable',
        floorId: '2a1522bd-623c-48fd-bf57-ede8b6ed9428',
        id: '4d80a031-f6ea-4b78-b185-56c9bc83e1be',
        name: 'P831',
        rates: DEFAULT_RATES,
        type: 'motorcycle'
    },
    {
        availability: 'available',
        floorId: '7000c4ea-a523-4ac2-8a0a-e2edf50c0114',
        id: '445ae41a-7949-4457-9d81-48c5b7317b14',
        name: 'P069',
        rates: DEFAULT_RATES,
        type: 'large'
    },
    {
        availability: 'unavailable',
        floorId: '894be5e0-c907-4a95-9a6b-b301bf3133e6',
        id: 'b01efceb-0c8e-4608-96ca-6a9bfbe25893',
        name: 'P957',
        rates: DEFAULT_RATES,
        type: 'large'
    },
    {
        availability: 'available',
        floorId: '2a1522bd-623c-48fd-bf57-ede8b6ed9428',
        id: '7fcc5e08-bc5e-4c93-8163-f5a95c9c13a0',
        name: 'P784',
        rates: DEFAULT_RATES,
        type: 'bicycle'
    },
    {
        availability: 'unavailable',
        floorId: '7000c4ea-a523-4ac2-8a0a-e2edf50c0114',
        id: 'b2200e34-21c2-432d-91ba-5bae64cd8d2a',
        name: 'P437',
        rates: DEFAULT_RATES,
        type: 'large'
    },
    {
        availability: 'unavailable',
        floorId: '894be5e0-c907-4a95-9a6b-b301bf3133e6',
        id: '454aeb74-a2ee-4a18-b298-db3feae5aaf9',
        name: 'P241',
        rates: DEFAULT_RATES,
        type: 'large'
    },
    {
        availability: 'unavailable',
        floorId: '1c090464-f0b7-4480-8be5-19264a42bbda',
        id: '1694f293-790d-4bfe-9b00-684a8499e41d',
        name: 'P070',
        rates: DEFAULT_RATES,
        type: 'motorcycle'
    },
    {
        availability: 'available',
        floorId: '894be5e0-c907-4a95-9a6b-b301bf3133e6',
        id: '236b5ccb-fa33-4821-949f-8a52da77f0b2',
        name: 'P573',
        rates: DEFAULT_RATES,
        type: 'large'
    },
    {
        availability: 'unavailable',
        floorId: '6f34c462-d014-4647-94fe-2199a9234a8f',
        id: '344e2a28-3a24-4026-baa0-626bb97c6ecb',
        name: 'P438',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'available',
        floorId: '2a1522bd-623c-48fd-bf57-ede8b6ed9428',
        id: '095b1f3b-43ea-4c2a-a870-fc6236d261d9',
        name: 'P596',
        rates: DEFAULT_RATES,
        type: 'bicycle'
    },
    {
        availability: 'unavailable',
        floorId: '6f34c462-d014-4647-94fe-2199a9234a8f',
        id: 'fea6d4dc-a387-4dea-a03c-c7d5bc2f6e0c',
        name: 'P855',
        rates: DEFAULT_RATES,
        type: 'large'
    },
    {
        availability: 'available',
        floorId: '894be5e0-c907-4a95-9a6b-b301bf3133e6',
        id: '189f7c1a-bb5b-48ab-9ac3-8286edc02b9f',
        name: 'P265',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'unavailable',
        floorId: '7000c4ea-a523-4ac2-8a0a-e2edf50c0114',
        id: 'db2b126e-034e-4f69-ab8a-0def31e4c8b7',
        name: 'P686',
        rates: DEFAULT_RATES,
        type: 'large'
    },
    {
        availability: 'unavailable',
        floorId: '1c090464-f0b7-4480-8be5-19264a42bbda',
        id: 'b2c5f344-4811-460d-a0e1-3655f7e3f8ab',
        name: 'P235',
        rates: DEFAULT_RATES,
        type: 'bicycle'
    },
    {
        availability: 'available',
        floorId: '2a1522bd-623c-48fd-bf57-ede8b6ed9428',
        id: 'b87b4d11-14e7-477e-b82d-442129190a0a',
        name: 'P155',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'available',
        floorId: '7000c4ea-a523-4ac2-8a0a-e2edf50c0114',
        id: '9a22c7a0-1f79-42a6-9c8a-d4a7e6911641',
        name: 'P459',
        rates: DEFAULT_RATES,
        type: 'motorcycle'
    },
    {
        availability: 'unavailable',
        floorId: '894be5e0-c907-4a95-9a6b-b301bf3133e6',
        id: 'be33fb5e-50b4-481a-8755-f6af08ece004',
        name: 'P638',
        rates: DEFAULT_RATES,
        type: 'handicapped'
    },
    {
        availability: 'unavailable',
        floorId: '2a1522bd-623c-48fd-bf57-ede8b6ed9428',
        id: 'ef8a0577-8890-43bf-ad17-dfdd21cb8198',
        name: 'P341',
        rates: DEFAULT_RATES,
        type: 'bicycle'
    },
    {
        availability: 'unavailable',
        floorId: '6f34c462-d014-4647-94fe-2199a9234a8f',
        id: '1ed8e482-6fa3-4d21-8981-501cb4a35ba6',
        name: 'P074',
        rates: DEFAULT_RATES,
        type: 'motorcycle'
    },
    {
        availability: 'unavailable',
        floorId: '1c090464-f0b7-4480-8be5-19264a42bbda',
        id: 'e8940fe0-e570-4342-9053-1bd5c497be3b',
        name: 'P910',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'available',
        floorId: '2a1522bd-623c-48fd-bf57-ede8b6ed9428',
        id: 'd8c8e595-e815-41e1-bc39-394563dd19af',
        name: 'P401',
        rates: DEFAULT_RATES,
        type: 'handicapped'
    },
    {
        availability: 'unavailable',
        floorId: '6f34c462-d014-4647-94fe-2199a9234a8f',
        id: 'bda28f03-4d6a-41e2-9a93-60164694eed2',
        name: 'P743',
        rates: DEFAULT_RATES,
        type: 'handicapped'
    },
    {
        availability: 'unavailable',
        floorId: '7000c4ea-a523-4ac2-8a0a-e2edf50c0114',
        id: '4a27a8ef-7238-479a-8cf9-d7ecf7f5d3fc',
        name: 'P902',
        rates: DEFAULT_RATES,
        type: 'motorcycle'
    },
    {
        availability: 'unavailable',
        floorId: '7000c4ea-a523-4ac2-8a0a-e2edf50c0114',
        id: 'acc39cd9-298d-4831-8caf-2860248c7b03',
        name: 'P851',
        rates: DEFAULT_RATES,
        type: 'large'
    },
    {
        availability: 'unavailable',
        floorId: '2a1522bd-623c-48fd-bf57-ede8b6ed9428',
        id: '1356fa16-5ff1-4499-a8aa-83bdabc4dce7',
        name: 'P597',
        rates: DEFAULT_RATES,
        type: 'motorcycle'
    },
    {
        availability: 'available',
        floorId: '2a1522bd-623c-48fd-bf57-ede8b6ed9428',
        id: 'aa47332e-ffe1-4296-ad5e-fa644cb3abf6',
        name: 'P478',
        rates: DEFAULT_RATES,
        type: 'large'
    },
    {
        availability: 'unavailable',
        floorId: '2a1522bd-623c-48fd-bf57-ede8b6ed9428',
        id: 'e77df748-0eb7-46b0-9559-ba7cdcb2d0cc',
        name: 'P685',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'available',
        floorId: '6f34c462-d014-4647-94fe-2199a9234a8f',
        id: '67a1929e-a207-4975-b293-8dc637ca27f6',
        name: 'P362',
        rates: DEFAULT_RATES,
        type: 'motorcycle'
    },
    {
        availability: 'unavailable',
        floorId: '894be5e0-c907-4a95-9a6b-b301bf3133e6',
        id: '37facb6d-7c2e-4a58-beb9-926fbc158641',
        name: 'P058',
        rates: DEFAULT_RATES,
        type: 'handicapped'
    },
    {
        availability: 'available',
        floorId: '7000c4ea-a523-4ac2-8a0a-e2edf50c0114',
        id: '4333284a-f2cb-4481-a442-92c91b9f77ed',
        name: 'P516',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'unavailable',
        floorId: '2a1522bd-623c-48fd-bf57-ede8b6ed9428',
        id: '167c48dc-07cb-4a00-9514-6aa5ee0f7a07',
        name: 'P459',
        rates: DEFAULT_RATES,
        type: 'motorcycle'
    },
    {
        availability: 'available',
        floorId: '894be5e0-c907-4a95-9a6b-b301bf3133e6',
        id: '2f5fcf9a-cbde-41f4-8f0f-129fed75bd4f',
        name: 'P372',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'available',
        floorId: '6f34c462-d014-4647-94fe-2199a9234a8f',
        id: '726bea78-4a20-42c3-bff8-7b5174b7d18f',
        name: 'P202',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'unavailable',
        floorId: '7000c4ea-a523-4ac2-8a0a-e2edf50c0114',
        id: '07e84252-98c3-40cc-8eeb-3b85b3e30dcd',
        name: 'P218',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'unavailable',
        floorId: '894be5e0-c907-4a95-9a6b-b301bf3133e6',
        id: 'b84145ee-5271-4905-b547-a9be9f8850aa',
        name: 'P848',
        rates: DEFAULT_RATES,
        type: 'motorcycle'
    },
    {
        availability: 'unavailable',
        floorId: '894be5e0-c907-4a95-9a6b-b301bf3133e6',
        id: '1a0a39ea-e3ca-4cae-b24e-a2d5151a8f87',
        name: 'P276',
        rates: DEFAULT_RATES,
        type: 'handicapped'
    },
    {
        availability: 'available',
        floorId: '7000c4ea-a523-4ac2-8a0a-e2edf50c0114',
        id: '79a0a182-edae-4826-ab20-5bb52e5e75c9',
        name: 'P397',
        rates: DEFAULT_RATES,
        type: 'bicycle'
    },
    {
        availability: 'available',
        floorId: '2a1522bd-623c-48fd-bf57-ede8b6ed9428',
        id: 'c07fea30-00cc-4727-8ee5-2f6cf8662a62',
        name: 'P082',
        rates: DEFAULT_RATES,
        type: 'motorcycle'
    },
    {
        availability: 'available',
        floorId: '6f34c462-d014-4647-94fe-2199a9234a8f',
        id: 'cafc782a-d297-4d82-ae75-8e96ff11e02b',
        name: 'P850',
        rates: DEFAULT_RATES,
        type: 'handicapped'
    },
    {
        availability: 'unavailable',
        floorId: '1c090464-f0b7-4480-8be5-19264a42bbda',
        id: '092102dc-862e-4947-a183-2ad68681e9ff',
        name: 'P846',
        rates: DEFAULT_RATES,
        type: 'motorcycle'
    },
    {
        availability: 'unavailable',
        floorId: '6f34c462-d014-4647-94fe-2199a9234a8f',
        id: '62f867a7-b876-47a8-a380-b755f812710a',
        name: 'P901',
        rates: DEFAULT_RATES,
        type: 'bicycle'
    },
    {
        availability: 'unavailable',
        floorId: '2a1522bd-623c-48fd-bf57-ede8b6ed9428',
        id: 'f7b32040-9220-4bdf-bbf9-f6d975ae42fc',
        name: 'P791',
        rates: DEFAULT_RATES,
        type: 'large'
    },
    {
        availability: 'unavailable',
        floorId: '6f34c462-d014-4647-94fe-2199a9234a8f',
        id: '06e0f552-89d8-42d6-a47d-b6b020759fc4',
        name: 'P509',
        rates: DEFAULT_RATES,
        type: 'motorcycle'
    },
    {
        availability: 'unavailable',
        floorId: '894be5e0-c907-4a95-9a6b-b301bf3133e6',
        id: '3e0c9712-f8e7-4779-84a2-7083e000fe9b',
        name: 'P608',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'available',
        floorId: '7000c4ea-a523-4ac2-8a0a-e2edf50c0114',
        id: '59fc3d93-f0d3-4383-8970-1bb17e6851e5',
        name: 'P369',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'available',
        floorId: '6f34c462-d014-4647-94fe-2199a9234a8f',
        id: '8c3ca38f-9a1d-4f56-b437-f50b07f47653',
        name: 'P940',
        rates: DEFAULT_RATES,
        type: 'bicycle'
    },
    {
        availability: 'available',
        floorId: '1c090464-f0b7-4480-8be5-19264a42bbda',
        id: 'c6e40e9d-23d5-4031-b17d-c9010c9b9518',
        name: 'P598',
        rates: DEFAULT_RATES,
        type: 'large'
    },
    {
        availability: 'available',
        floorId: '7000c4ea-a523-4ac2-8a0a-e2edf50c0114',
        id: '6125741e-3f04-402c-9ad1-e1d9b9d094c9',
        name: 'P344',
        rates: DEFAULT_RATES,
        type: 'motorcycle'
    },
    {
        availability: 'unavailable',
        floorId: '6f34c462-d014-4647-94fe-2199a9234a8f',
        id: 'aedab103-b465-47aa-9c6f-8225669e4ba4',
        name: 'P941',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'unavailable',
        floorId: '2a1522bd-623c-48fd-bf57-ede8b6ed9428',
        id: 'f78b7f37-8721-4915-b5dd-791b7a17f713',
        name: 'P508',
        rates: DEFAULT_RATES,
        type: 'handicapped'
    },
    {
        availability: 'available',
        floorId: '7000c4ea-a523-4ac2-8a0a-e2edf50c0114',
        id: 'e70534ef-ef9d-4e60-afb0-90b0e9337796',
        name: 'P091',
        rates: DEFAULT_RATES,
        type: 'motorcycle'
    },
    {
        availability: 'available',
        floorId: '2a1522bd-623c-48fd-bf57-ede8b6ed9428',
        id: '9da2fefa-331c-4ece-9807-e6318d335a50',
        name: 'P873',
        rates: DEFAULT_RATES,
        type: 'bicycle'
    },
    {
        availability: 'unavailable',
        floorId: '2a1522bd-623c-48fd-bf57-ede8b6ed9428',
        id: 'ce8a44aa-7a0c-49e3-ae63-9ede5ab0524e',
        name: 'P286',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'available',
        floorId: '7000c4ea-a523-4ac2-8a0a-e2edf50c0114',
        id: '9ab91153-d010-4a6b-b09f-a436a348ce33',
        name: 'P250',
        rates: DEFAULT_RATES,
        type: 'motorcycle'
    },
    {
        availability: 'available',
        floorId: '7000c4ea-a523-4ac2-8a0a-e2edf50c0114',
        id: '8a8e73c2-7a1b-4938-83d0-646a14fbc903',
        name: 'P690',
        rates: DEFAULT_RATES,
        type: 'bicycle'
    },
    {
        availability: 'unavailable',
        floorId: '7000c4ea-a523-4ac2-8a0a-e2edf50c0114',
        id: '78148eb7-549a-440b-8504-5f676cd02dd3',
        name: 'P681',
        rates: DEFAULT_RATES,
        type: 'handicapped'
    },
    {
        availability: 'available',
        floorId: '894be5e0-c907-4a95-9a6b-b301bf3133e6',
        id: '51c7bb93-d79a-409d-a902-1af36a6e1d5e',
        name: 'P512',
        rates: DEFAULT_RATES,
        type: 'motorcycle'
    },
    {
        availability: 'available',
        floorId: '2a1522bd-623c-48fd-bf57-ede8b6ed9428',
        id: 'ec420c59-9508-493a-a7d1-8b765811f098',
        name: 'P929',
        rates: DEFAULT_RATES,
        type: 'large'
    },
    {
        availability: 'available',
        floorId: '7000c4ea-a523-4ac2-8a0a-e2edf50c0114',
        id: '66ee9a54-ef40-4c07-9f0e-1b0a107e0914',
        name: 'P292',
        rates: DEFAULT_RATES,
        type: 'handicapped'
    },
    {
        availability: 'unavailable',
        floorId: '2a1522bd-623c-48fd-bf57-ede8b6ed9428',
        id: '897b02c9-bc75-43e0-a1a8-08f89ed33b10',
        name: 'P474',
        rates: DEFAULT_RATES,
        type: 'large'
    },
    {
        availability: 'unavailable',
        floorId: '1c090464-f0b7-4480-8be5-19264a42bbda',
        id: '082e573b-8bdc-4887-97b6-464df640ba99',
        name: 'P851',
        rates: DEFAULT_RATES,
        type: 'motorcycle'
    },
    {
        availability: 'available',
        floorId: '6f34c462-d014-4647-94fe-2199a9234a8f',
        id: 'e173ea57-70e8-4ffb-a425-231803dceedd',
        name: 'P236',
        rates: DEFAULT_RATES,
        type: 'handicapped'
    },
    {
        availability: 'unavailable',
        floorId: '1c090464-f0b7-4480-8be5-19264a42bbda',
        id: 'fe212cc5-93cc-4b5c-9026-47caf5c6e7fd',
        name: 'P340',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'available',
        floorId: '1c090464-f0b7-4480-8be5-19264a42bbda',
        id: '8ba9aa73-5e65-4dde-9bb7-44a6a70198c2',
        name: 'P780',
        rates: DEFAULT_RATES,
        type: 'large'
    },
    {
        availability: 'available',
        floorId: '1c090464-f0b7-4480-8be5-19264a42bbda',
        id: '3a21f89a-b17e-4afd-a1c2-85d91a16d87a',
        name: 'P416',
        rates: DEFAULT_RATES,
        type: 'bicycle'
    },
    {
        availability: 'unavailable',
        floorId: '7000c4ea-a523-4ac2-8a0a-e2edf50c0114',
        id: '0504c311-f8ed-4ebf-bab8-c378f2ebbc86',
        name: 'P098',
        rates: DEFAULT_RATES,
        type: 'bicycle'
    },
    {
        availability: 'unavailable',
        floorId: '7000c4ea-a523-4ac2-8a0a-e2edf50c0114',
        id: '1aa04b5d-2c55-467a-9208-3295bb325a73',
        name: 'P597',
        rates: DEFAULT_RATES,
        type: 'bicycle'
    },
    {
        availability: 'available',
        floorId: '894be5e0-c907-4a95-9a6b-b301bf3133e6',
        id: '6310b80a-b7da-4f01-98ca-f02a384109c7',
        name: 'P210',
        rates: DEFAULT_RATES,
        type: 'handicapped'
    },
    {
        availability: 'available',
        floorId: '7000c4ea-a523-4ac2-8a0a-e2edf50c0114',
        id: 'c9f19444-7136-4218-952e-4dbe44acdea7',
        name: 'P012',
        rates: DEFAULT_RATES,
        type: 'handicapped'
    },
    {
        availability: 'available',
        floorId: '7000c4ea-a523-4ac2-8a0a-e2edf50c0114',
        id: '130503c3-2485-4f85-9e44-a0309d1cd430',
        name: 'P574',
        rates: DEFAULT_RATES,
        type: 'motorcycle'
    },
    {
        availability: 'unavailable',
        floorId: '2a1522bd-623c-48fd-bf57-ede8b6ed9428',
        id: '0e472237-2b8d-47f1-9ee0-9bd64eb5448d',
        name: 'P956',
        rates: DEFAULT_RATES,
        type: 'bicycle'
    },
    {
        availability: 'available',
        floorId: '6f34c462-d014-4647-94fe-2199a9234a8f',
        id: '547c3395-ee72-41ce-8b0a-15aeac13fe2d',
        name: 'P784',
        rates: DEFAULT_RATES,
        type: 'handicapped'
    },
    {
        availability: 'unavailable',
        floorId: '6f34c462-d014-4647-94fe-2199a9234a8f',
        id: '2b9e0566-5a24-4c70-ab08-84fb3e087357',
        name: 'P880',
        rates: DEFAULT_RATES,
        type: 'large'
    },
    {
        availability: 'unavailable',
        floorId: '1c090464-f0b7-4480-8be5-19264a42bbda',
        id: 'e4ebc211-614c-4b8e-8341-1682f72bbe38',
        name: 'P252',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'unavailable',
        floorId: '2a1522bd-623c-48fd-bf57-ede8b6ed9428',
        id: '9b864121-ba2d-4734-b57c-f9fa35c30884',
        name: 'P375',
        rates: DEFAULT_RATES,
        type: 'bicycle'
    },
    {
        availability: 'available',
        floorId: '6f34c462-d014-4647-94fe-2199a9234a8f',
        id: '9f9317dc-6a21-4d44-91c2-c59ddd10f093',
        name: 'P257',
        rates: DEFAULT_RATES,
        type: 'handicapped'
    },
    {
        availability: 'unavailable',
        floorId: '6f34c462-d014-4647-94fe-2199a9234a8f',
        id: '9223839e-429f-48ac-b094-c0aa3e291588',
        name: 'P620',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'available',
        floorId: '894be5e0-c907-4a95-9a6b-b301bf3133e6',
        id: '12810a80-ce60-4e1f-80e0-8b9ac4c06c22',
        name: 'P531',
        rates: DEFAULT_RATES,
        type: 'handicapped'
    },
    {
        availability: 'available',
        floorId: '6f34c462-d014-4647-94fe-2199a9234a8f',
        id: '372737df-52c0-42f6-8063-e7e36f40fd41',
        name: 'P283',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'unavailable',
        floorId: '894be5e0-c907-4a95-9a6b-b301bf3133e6',
        id: '21884964-53e0-4f70-bb36-2b3ace6e89c3',
        name: 'P468',
        rates: DEFAULT_RATES,
        type: 'motorcycle'
    },
    {
        availability: 'unavailable',
        floorId: '1c090464-f0b7-4480-8be5-19264a42bbda',
        id: '92a2a297-8b41-41de-9b84-307bef2141d6',
        name: 'P522',
        rates: DEFAULT_RATES,
        type: 'bicycle'
    },
    {
        availability: 'unavailable',
        floorId: '894be5e0-c907-4a95-9a6b-b301bf3133e6',
        id: 'e6b419dd-90fd-468c-81a9-990aa65af9f8',
        name: 'P478',
        rates: DEFAULT_RATES,
        type: 'motorcycle'
    },
    {
        availability: 'available',
        floorId: '894be5e0-c907-4a95-9a6b-b301bf3133e6',
        id: '165193a9-9afa-4df6-8721-10a4d701d6c6',
        name: 'P536',
        rates: DEFAULT_RATES,
        type: 'large'
    },
    {
        availability: 'unavailable',
        floorId: '1c090464-f0b7-4480-8be5-19264a42bbda',
        id: 'e2a2dbeb-fbfd-4416-b482-c7baf8ab25d3',
        name: 'P651',
        rates: DEFAULT_RATES,
        type: 'large'
    },
    {
        availability: 'unavailable',
        floorId: '1c090464-f0b7-4480-8be5-19264a42bbda',
        id: '50c0dafc-f413-44a1-aa68-d97dad71a148',
        name: 'P931',
        rates: DEFAULT_RATES,
        type: 'motorcycle'
    },
    {
        availability: 'unavailable',
        floorId: '894be5e0-c907-4a95-9a6b-b301bf3133e6',
        id: '30b08d1e-fb27-4302-890e-37232931a98a',
        name: 'P179',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'unavailable',
        floorId: '894be5e0-c907-4a95-9a6b-b301bf3133e6',
        id: '9064a1a5-37e7-48a8-ac68-225a327af523',
        name: 'P863',
        rates: DEFAULT_RATES,
        type: 'compact'
    },
    {
        availability: 'available',
        floorId: '7000c4ea-a523-4ac2-8a0a-e2edf50c0114',
        id: '035b533a-ee57-448e-863e-6e41ccf14d81',
        name: 'P489',
        rates: DEFAULT_RATES,
        type: 'large'
    },
    {
        availability: 'available',
        floorId: '894be5e0-c907-4a95-9a6b-b301bf3133e6',
        id: '44c15041-2b92-4197-b94d-dc069c5284ca',
        name: 'P303',
        rates: DEFAULT_RATES,
        type: 'handicapped'
    },
    {
        availability: 'available',
        floorId: '6f34c462-d014-4647-94fe-2199a9234a8f',
        id: 'f53d81d8-b632-41e9-8e8a-207a2963c11c',
        name: 'P195',
        rates: DEFAULT_RATES,
        type: 'motorcycle'
    },
    {
        availability: 'unavailable',
        floorId: '894be5e0-c907-4a95-9a6b-b301bf3133e6',
        id: 'fddf738e-fd34-4a27-83a6-c5c5ab40aff4',
        name: 'P286',
        rates: DEFAULT_RATES,
        type: 'motorcycle'
    },
    {
        availability: 'available',
        floorId: '2a1522bd-623c-48fd-bf57-ede8b6ed9428',
        id: '7689796b-8ceb-4c5e-822e-4617cd909717',
        name: 'P405',
        rates: DEFAULT_RATES,
        type: 'handicapped'
    },
    {
        availability: 'unavailable',
        floorId: '2a1522bd-623c-48fd-bf57-ede8b6ed9428',
        id: 'b6f0534b-9141-4894-8571-2524fe352230',
        name: 'P888',
        rates: DEFAULT_RATES,
        type: 'handicapped'
    },
    {
        availability: 'unavailable',
        floorId: '1c090464-f0b7-4480-8be5-19264a42bbda',
        id: '630743a2-8593-4eac-adb1-286efe844026',
        name: 'P822',
        rates: DEFAULT_RATES,
        type: 'large'
    },
    {
        availability: 'available',
        floorId: '894be5e0-c907-4a95-9a6b-b301bf3133e6',
        id: 'bff0c470-b724-4930-888f-227a0cb6f1b0',
        name: 'P769',
        rates: DEFAULT_RATES,
        type: 'bicycle'
    },
    {
        availability: 'unavailable',
        floorId: '1c090464-f0b7-4480-8be5-19264a42bbda',
        id: '30fb444b-089a-4600-8bc4-6a7669077765',
        name: 'P780',
        rates: DEFAULT_RATES,
        type: 'large'
    },
    {
        availability: 'unavailable',
        floorId: '2a1522bd-623c-48fd-bf57-ede8b6ed9428',
        id: '9462648d-bbe4-448c-a444-1cb69f22b56a',
        name: 'P671',
        rates: DEFAULT_RATES,
        type: 'large'
    }
]

export default PARKING_SPACE_DATA
