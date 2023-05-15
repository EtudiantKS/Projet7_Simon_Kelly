import React from 'react'
import logo from "../assets/Logoblanc.webp"

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__img'>
                <img src={logo} alt='Logo de Kasa' />
            </div>
            <div className='footer__info'>
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer