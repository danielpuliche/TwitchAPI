import React from 'react'
import { Header } from '../../components/Header'
import TwitchLogo from '../../assets/logoTwitch.png'
import { Selector } from '../../components/Selector'

const Home = () => {
    return (
        <>
            <Header title="HOME"/>
            <div className='flex flex-col m-4'>
                < Selector 
                    link="/TopGames"
                    msg="Ver TOP de juegos"
                />
                < Selector
                    link="/SearchGames"
                    msg="Search games"  
                />
                <img src={TwitchLogo}></img>
            </div>
        </>
        )
    }
    
export {Home} 