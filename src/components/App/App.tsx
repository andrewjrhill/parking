import React, { useState } from 'react'
import './App.scss'
import { useMediaQuery } from 'react-responsive'
import breakpoints from '../../constants/breakpoints'
import MobileTopBar from '../MobileTopBar/MobileTopBar'
import { BrowserRouter as Router } from 'react-router-dom'
import FloorsNavigation from '../FloorsNavigation/FloorsNavigation'
import Routes from '../Routes/Routes'
import PageTitle from '../PageTitle/PageTitle'

const App: React.FC = () => {
    const isLargeViewport = useMediaQuery({ query: `(min-width: ${breakpoints.medium})` })

    const [navDrawerOpen, setNavDrawerOpen] = useState<boolean>(false)
    const handleNavDrawerToggle = () => setNavDrawerOpen(!navDrawerOpen)

    return (
        <Router>
            {!isLargeViewport && <MobileTopBar handleNavDrawerToggle={handleNavDrawerToggle} />}

            <div className='page-layout'>
                <PageTitle />

                <div className='flex-wrapper'>
                    <FloorsNavigation handleNavDrawerToggle={handleNavDrawerToggle} navDrawerOpen={navDrawerOpen} />

                    <Routes />

                    <div>filtering placeholder...</div>
                </div>
            </div>
        </Router>
    )
}

export default App
