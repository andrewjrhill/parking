import React, { useState } from 'react'
import './App.scss'
import { useMediaQuery } from 'react-responsive'
import breakpoints from '../../constants/breakpoints'
import MobileTopBar from '../MobileTopBar/MobileTopBar'
import { BrowserRouter as Router } from 'react-router-dom'
import DrawerWhenMobile from '../DrawerWhenMobile/DrawerWhenMobile'
import Routes from '../Routes/Routes'
import PageTitle from '../PageTitle/PageTitle'
import FloorsTabsList from '../FloorsTabsList/FloorsTabsList'
import FiltersTabsList from '../FiltersTabsList/FiltersTabsList'
import ParkingAddOrEditDialog from '../ParkingAddOrEditDialog/ParkingAddOrEditDialog'

const App: React.FC = () => {
    const isLargeViewport = useMediaQuery({ query: `(min-width: ${breakpoints.medium})` })

    const [addDialogOpen, setAddDialogOpen] = useState<boolean>(false)
    const onToggleAddDialog = () => setAddDialogOpen(!addDialogOpen)

    const [navDrawerOpen, setNavDrawerOpen] = useState<boolean>(false)
    const handleNavDrawerToggle = () => setNavDrawerOpen(!navDrawerOpen)

    const [filterDrawerOpen, setFilterDrawerOpen] = useState<boolean>(false)
    const handleFilterDrawerToggle = () => setFilterDrawerOpen(!filterDrawerOpen)

    return (
        <Router>
            {!isLargeViewport && (
                <MobileTopBar
                    handleFilterDrawerToggle={handleFilterDrawerToggle}
                    handleNavDrawerToggle={handleNavDrawerToggle}
                />
            )}

            <div className='page-layout'>
                <PageTitle onToggleAddDialog={onToggleAddDialog} />

                <div className='flex-wrapper'>
                    <DrawerWhenMobile handleToggle={handleNavDrawerToggle} open={navDrawerOpen} position='left'>
                        <FloorsTabsList />
                    </DrawerWhenMobile>

                    <Routes />

                    <DrawerWhenMobile handleToggle={handleFilterDrawerToggle} open={filterDrawerOpen} position='right'>
                        <FiltersTabsList />
                    </DrawerWhenMobile>
                </div>
            </div>

            <ParkingAddOrEditDialog isOpen={addDialogOpen} onClose={onToggleAddDialog} />
        </Router>
    )
}

export default App
