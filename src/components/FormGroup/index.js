import React from 'react'

import './index.css'

export default (props) => {
    const classNames = props.className ? ` ${props.className}` : ''
    return <div className={`form-group${classNames}`}>
        {props.children}
    </div>
}
