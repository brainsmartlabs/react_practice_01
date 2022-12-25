import React, { useState } from 'react'
import PropTypes from 'prop-types';

function Navbar(props) {


    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.darkMode ? 'dark' : 'light'} bg-${props.darkMode ? 'dark' : 'light'}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">{props.aboutText}</a>
                            </li>
                        </ul>
                        <div className={`form-check form-switch ${props.darkMode ? 'text-light' : 'text-dark'}`}>
                            <input className="form-check-input mx-2" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={props.toggleMode}/>
                            <label className="form-check-label mx-2" htmlFor="flexSwitchCheckChecked">{`${props.darkMode ? 'Disable' : 'Enable'} Dark Mode`}</label>
                        </div>
                        <form className="d-flex mx-4" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-primary" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}


Navbar.propTypes = { title: PropTypes.string.isRequired, aboutText: PropTypes.string }

Navbar.defaultProps = {
    title: 'Set Title Here',
    aboutText: 'Default About Text'
}

export default Navbar

