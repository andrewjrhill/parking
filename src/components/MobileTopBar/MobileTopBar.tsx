import { Button, Navbar, NavbarGroup } from '@blueprintjs/core'
import { mdiMenu } from '@mdi/js'
import Icon from '@mdi/react'
import React from 'react'
import './MobileTopBar.scss'

interface Props {
    handleNavDrawerToggle: () => void
}

const MobileTopBar: React.FC<Props> = ({ handleNavDrawerToggle }) => (
    <Navbar>
        <NavbarGroup>
            <Button minimal onClick={() => handleNavDrawerToggle()}>
                <Icon className='icon' path={mdiMenu} />
            </Button>
        </NavbarGroup>
    </Navbar>
)

export default MobileTopBar
