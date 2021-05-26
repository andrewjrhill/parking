import { Button, Navbar, NavbarGroup } from '@blueprintjs/core'
import { mdiFilterOutline, mdiMenu } from '@mdi/js'
import Icon from '@mdi/react'
import React from 'react'
import './MobileTopBar.scss'

interface Props {
    handleFilterDrawerToggle: () => void
    handleNavDrawerToggle: () => void
}

const MobileTopBar: React.FC<Props> = ({ handleFilterDrawerToggle, handleNavDrawerToggle }) => (
    <Navbar>
        <NavbarGroup className='flex-container'>
            <Button minimal onClick={() => handleNavDrawerToggle()}>
                <Icon className='icon' path={mdiMenu} />
            </Button>

            <Button minimal onClick={() => handleFilterDrawerToggle()}>
                <Icon className='icon' path={mdiFilterOutline} />
            </Button>
        </NavbarGroup>
    </Navbar>
)

export default MobileTopBar
