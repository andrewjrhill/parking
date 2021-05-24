import React from 'react'
import { hot } from 'react-hot-loader'
import ParkingCreateButton from '../ParkingCreateButton/ParkingCreateButton'
import PageTitle from '../PageTitle/PageTitle'

const App: React.FC = () => (
    <div>
        <PageTitle
            action={<ParkingCreateButton />}
            subtitle='Dronning Eufemias gate 30'
            title='Floor 1: Parking Available'
        />
    </div>
)

export default hot(module)(App)
