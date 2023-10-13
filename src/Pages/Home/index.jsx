import React from 'react'
import {Link} from 'react-router-dom'
import { Header } from '../../components/Header'
import TwitchLogo from '../../assets/logoTwitch.png'

const Home = () => {
    return (
        <>
            <Header title="HOME"/>
            <div className='flex flex-col'>
                <div className='bg-lightPurpleTwitch p-2 m-2 rounded-md text-BlackTwitch text-center'>
                    <Link
                        to='/TopGames'
                    >
                        TOP
                    </Link>
                </div>
                <div className='bg-lightPurpleTwitch p-2 m-2 rounded-md text-BlackTwitch text-center'>
                    <Link
                        to='/SearchGames'
                    >
                        SEARCH
                    </Link>
                </div>
                <img src={TwitchLogo}></img>
            </div>
        </>
        )
    }
    
export {Home} 