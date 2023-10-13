import React from 'react'
import { Header } from '../../components/Header'
import { SearchBar} from '../../components/SearchBar'
import { ListGames } from '../../components/ListGames'
import { GameItem } from '../../components/GameItem'

import axios from 'axios'

const SearchGames = () => {

  
  const [games,setGames] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')
  
  React.useEffect(
    () => {

      const urlAPI = "https://api.twitch.tv/helix/games/top?first=100"
      const ClientID = "ypp5uhynp8354lc3jgmmixh0d4m1nk"
      const AccessToken = "swvcbmoalsauzomjwa3upjajbmig61"
      
      try {
        axios.get(urlAPI,{
          headers: {
            'Client-ID': ClientID,
            'Authorization':`Bearer ${AccessToken}`
          }
        }).then(
          (response) => {
            setGames(response.data.data)
          }
        );
      } catch (error) {
        
      }
    }
  ,[])
  
  const searchedGames = games.filter(
    (game) => !!game.name.toUpperCase().includes(searchValue.toUpperCase())
  )  

  return (
    <>
      <Header title="SEARCH GAMES"/>
      <SearchBar 
        setSearchValue={setSearchValue}
      />
      <ListGames>
        {searchedGames.map(
          (game) => (
            <GameItem key={game.name} gameName={game.name} imgURL={game.box_art_url}/>
          )
        )}
      </ListGames>
    </>
  )
}

export {SearchGames}