import React from 'react'
import { Header } from '../../components/Header'
import { ListGames } from '../../components/ListGames'
import { GameItem } from '../../components/GameItem'
import { Slider} from '../../components/Slider'

import axios from 'axios'

const TopGames = () => {

    const urlAPI = "https://api.twitch.tv/helix/games/top?first=100"
    const ClientID = "ypp5uhynp8354lc3jgmmixh0d4m1nk"
    const AccessToken = "swvcbmoalsauzomjwa3upjajbmig61"

    const [topGames,setTopGames] = React.useState([])

    React.useEffect(
        () => {
            try {
                axios.get(urlAPI,{
                    headers: {
                        'Client-ID': ClientID,
                        'Authorization':`Bearer ${AccessToken}`
                    }
                }).then(
                    (response) => {
                        setTopGames(response.data.data)
                    }
                );
            } catch (error) {
                console.log('ERROR');
            }
        }
    ,[])

    return (
        <>
            <Header title="SEARCH GAMES"/>
            <Slider />
            <ListGames>
                {topGames.map(
                (game, index) => (
            <GameItem 
                key={game.name} 
                gameName={game.name} 
                imgURL={game.box_art_url}
                index={index}
            />
                )
                )}
            </ListGames>
        </>
    )
}
    
export {TopGames} 