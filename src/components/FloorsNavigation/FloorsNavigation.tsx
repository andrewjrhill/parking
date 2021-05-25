import React from 'react'
import './FloorsNavigation.scss'
import { useMediaQuery } from 'react-responsive'
import breakpoints from '../../constants/breakpoints'
import { Button, Drawer } from '@blueprintjs/core'
import FloorsTabsList from '../FloorsTabsList/FloorsTabsList'
import Icon from '@mdi/react'
import { mdiClose } from '@mdi/js'

interface Props {
    handleNavDrawerToggle: () => void
    navDrawerOpen: boolean
}

const FloorsNavigation: React.FC<Props> = ({ handleNavDrawerToggle, navDrawerOpen }) => {
    const isLargeViewport = useMediaQuery({ query: `(min-width: ${breakpoints.medium})` })

    return isLargeViewport ? (
        <FloorsTabsList />
    ) : (
        <Drawer className='drawer' isOpen={navDrawerOpen} onClose={() => handleNavDrawerToggle()} position='left'>
            <Button className='close-button' minimal onClick={() => handleNavDrawerToggle()}>
                <Icon className='icon' path={mdiClose} />
                <span>close</span>
            </Button>

            <FloorsTabsList />
        </Drawer>
    )
}

export default FloorsNavigation
