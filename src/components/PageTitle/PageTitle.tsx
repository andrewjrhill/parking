import React, { ReactNode } from 'react'
import './PageTitle.scss'

interface Props {
    action?: ReactNode
    subtitle?: string
    title: string
}

const PageTitle: React.FC<Props> = ({ action, subtitle, title }) => (
    <div className='page-title'>
        <div className='headings-container'>
            <h1 className='bp3-heading title'>{title}</h1>
            {subtitle && <p className='subtitle'>{subtitle}</p>}
        </div>

        {action && <div className='action-container'>{action}</div>}
    </div>
)

export default PageTitle
