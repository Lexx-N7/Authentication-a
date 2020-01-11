import React from 'react'
import {Link} from 'react-router-dom'

export default function Logout() {
    return (
        <div>
            <h2 style={{color: 'red'}}>Logout Page</h2>
            <Link to='/'>you shoud  login</Link>
        </div>
    )
}
