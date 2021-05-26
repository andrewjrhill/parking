import React, { ComponentType } from 'react'
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router-dom'

import FloorsPage from '../FloorsPage/FloorsPage'
import FLOOR_DATA from '../../data/floors.data'

interface OwnRoute {
    component: ComponentType<RouteComponentProps> | ComponentType
    exact: boolean
    path: string
}

const ROUTES: OwnRoute[] = [
    {
        component: FloorsPage,
        exact: true,
        path: '/floor/:id'
    }
]

const Routes: React.FC = () => (
    <Switch>
        {ROUTES.map(route => (
            <Route component={route.component} exact={route.exact} key={route.path} path={route.path} />
        ))}

        <Route path='/floor' exact>
            <Redirect to='/' />
        </Route>

        <Route path='*' exact>
            <Redirect to={`/floor/${FLOOR_DATA[0].id}`} />
        </Route>
    </Switch>
)

export default Routes
