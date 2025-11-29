import React from 'react'

function Footer(){

    return(
        <footer className="footer">

            <div className="footer-inner">
                <p className="inner-text">
                     © {new Date().getFullYear()} Yoga Gallery — Built  by Amith
                </p>
            </div>
        </footer>
    )
}

export default Footer;