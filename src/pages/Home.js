import React from 'react'
import Todos from '../components/Todos'

export default function Home() {
    return(
        <div className='m-3'>
            <h1 className='text-primary'>Home page</h1>
            <Todos/>
        </div>
    )
}