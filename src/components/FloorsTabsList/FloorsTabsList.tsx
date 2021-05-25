import React from 'react'
import classnames from 'classnames'
import './FloorsTabsList.scss'
import FLOOR_DATA from '../../data/floors.data'
import Floor from '../../types/floor.types'
import { Button } from '@blueprintjs/core'
import { useHistory, matchPath, useLocation } from 'react-router-dom'

const FloorsTabsList: React.FC = () => {
    const history = useHistory()
    const { pathname } = useLocation()
    const path = matchPath(pathname, { path: '/floor/:id' })

    return (
        <div className='floors-tabs-list'>
            <p className='heading'>Navigate Floors</p>

            {FLOOR_DATA.map((floor: Floor) => (
                <Button
                    className={classnames('tab', (path?.params as { id: string }).id === floor.id && 'active')}
                    key={floor.id}
                    onClick={() => history.push(`/floor/${floor.id}`)}
                >
                    <span>{floor.name}</span>
                    <span>42</span>
                </Button>
            ))}
        </div>
    )
}

export default FloorsTabsList
