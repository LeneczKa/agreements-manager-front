import React from 'react';

import './ProgressBar.scss'

interface Props {
    count: number;
    bgcolour: string;
}

export const ProgressBar = (props: Props) => {
    return (
        <div className='container'>
            <div className='filler'
                 style={{
                     width: `${props.count}%`,
                     backgroundColor: `${props.bgcolour}`
                 }}>
                <span className='label'>{`${props.count}%`}</span>
            </div>
        </div>
    )
}
