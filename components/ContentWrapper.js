import React from 'react'
import Styles from '../styles/ContentWrapper.module.css'

function ContentWrapper({children}) {
    return (
        <div className={Styles.container}>
            {children}
        </div>
    )
}

export default ContentWrapper
