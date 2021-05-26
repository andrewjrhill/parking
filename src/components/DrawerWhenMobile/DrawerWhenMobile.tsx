import React from 'react'
import './DrawerWhenMobile.scss'
import { useMediaQuery } from 'react-responsive'
import breakpoints from '../../constants/breakpoints'
import { Drawer } from '@blueprintjs/core'
import CloseButton from '../CloseButton/CloseButton'

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
            <CloseButton onClick={handleToggle} />
            {children}
        </Drawer>
    )
}

export default DrawerWhenMobile
