import React from 'react'
import './DrawerWhenMobile.scss'
import { useMediaQuery } from 'react-responsive'
import breakpoints from '../../constants/breakpoints'
import { Button, Drawer } from '@blueprintjs/core'
import Icon from '@mdi/react'
import { mdiClose } from '@mdi/js'

interface Props {
    handleToggle: () => void
    open: boolean
    position: 'left' | 'right'
}

const DrawerWhenMobile: React.FC<Props> = ({ children, handleToggle, open, position }) => {
    const isLargeViewport = useMediaQuery({ query: `(min-width: ${breakpoints.medium})` })

    return isLargeViewport ? (
        <>{children}</>
    ) : (
        <Drawer className='drawer' isOpen={open} onClose={() => handleToggle()} position={position} size='80%'>
            <Button className='close-button' minimal onClick={() => handleToggle()}>
                <Icon className='icon' path={mdiClose} />
                <span>close</span>
            </Button>

            {children}
        </Drawer>
    )
}

export default DrawerWhenMobile
