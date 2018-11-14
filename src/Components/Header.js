import React from 'react'
import styles from './Header.css';

import { Link } from 'react-router-dom'

const Header = () => (
  <div className="Header">
    <h1>Lost In The Sauce</h1>
    <Link to="/" className="Link">Home</Link>
    <Link to="/about" className="Link">About Me</Link>
  </div>
)

export default Header
