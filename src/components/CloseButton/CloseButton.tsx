import React from 'react'
import './CloseButton.scss'
import { Button } from '@blueprintjs/core'
import Icon from '@mdi/react'
import { mdiClose } from '@mdi/js'

interface Props {
    onClick: () => void
}

const CloseButton: React.FC<Props> = ({ onClick }) => (
    <Button className='close-button' minimal onClick={onClick}>
        <Icon className='icon' path={mdiClose} />
        <span>close</span>
    </Button>
)

export default CloseButton
