import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return(
        <div className='header'>
            <Link className="link" to='/'>Intelligent Innovations Conference</Link>
        </div>
    )
}

export default Header;