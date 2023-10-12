import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <>
            <div>Home</div>
            <Link
                to='/TopGames'
            >
                TOP
            </Link>
            <Link
                to='/SearchGames'
            >
                SEARCH
            </Link>
        </>
        )
    }
    
export {Home} 