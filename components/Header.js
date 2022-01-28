import React from 'react'
import Link from 'next/link';
import Styles from '../styles/Header.module.css'

function Header() {
    return (
        <header className={Styles.header}>
            <div className={Styles.btnContainer}>
                <Link href='/'>
                    <a className={Styles.lnk}>
                        <button className={Styles.btn}>
                            DEV.IO
                        </button>
                    </a>
                </Link>
            </div>
            <Link href='/'>
                <a className={Styles.lnk}>
                    Home
                </a>
            </Link>
            <Link href='/about'>
                <a className={Styles.lnk}>
                    About
                </a>
            </Link>
        </header>
    )
}

export default Header
