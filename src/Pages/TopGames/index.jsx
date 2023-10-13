import React from 'react'
import { Header } from '../../components/Header'
import { ListGames } from '../../components/ListGames'
import { GameItem } from '../../components/GameItem'
import { SelectTop} from '../../components/SelectTop'

import axios from 'axios'

const TopGames = () => {

    const [selectedTop,setSelectedTop] = React.useState('5')    
    const [topGames,setTopGames] = React.useState([])
    
    React.useEffect(
        () => {
            console.log(`TOP SEARCH (${selectedTop})`);
            try {
                const urlAPI = `https://api.twitch.tv/helix/games/top?first=${selectedTop}`
                const ClientID = "ypp5uhynp8354lc3jgmmixh0d4m1nk"
                const AccessToken = "swvcbmoalsauzomjwa3upjajbmig61"
                
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
    ,[selectedTop])

    return (
        <>
            <Header title="SEARCH GAMES"/>
            <div
                className='
                    m-4
                    flex
                '    
            >
                {selectedTop != 5 &&
                    <SelectTop 
                        topValue={5}
                        setSelectedTop={setSelectedTop}
                    />
                }
                {selectedTop != 10 &&
                    <SelectTop 
                        topValue={10}
                        setSelectedTop={setSelectedTop}
                    />
                }
                {selectedTop != 15 &&
                    <SelectTop 
                        topValue={15}
                        setSelectedTop={setSelectedTop}
                    />
                }
            </div>
            <div
                className='
                    flex
                    flex-col
                    m-0
                    p-0
                '
            >
                <div
                    className='
                        p-2
                        mx-10
                        text-center
                        bg-strongPurpleTwitch
                        rounded-t-xl
                        text-whiteTwitch
                        text-lg
                    '
                >
                    TOP {selectedTop}
                </div>
            </div>
            <ListGames>
                {topGames.map(
                (game, index) => (
            <GameItem 
                key={index} 
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