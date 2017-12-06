import React from 'react';
import './Nav.css';
import logo from '../../assets/logo.png';
import title from '../../assets/title.png';

export default function Nav(props) {
    return (
      <div id='Nav'>
        <img className ="logo" src={logo} alt=''/>
        <img className="logo" src={title} alt=''/>
          </div>
    );
}

