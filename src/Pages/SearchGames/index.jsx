import React from 'react'
import { Header } from '../../components/Header'
import { SearchBar} from '../../components/SearchBar'
import { ListGames } from '../../components/ListGames'
import { GameItem } from '../../components/GameItem'
import { GameItemLoading } from '../../components/GameItemLoading'

import axios from 'axios'

const SearchGames = () => {

  const [loading, setLoading] = React.useState(true)
  const [games,setGames] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')
  
  React.useEffect(
    () => {
      setTimeout(() => {
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
              setLoading(false)
            }
          );
        } catch (error) {
          console.log(error);  
        }
      },500)
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
        searchValue={searchValue}
      />
      <ListGames>
        {loading &&
          <>          
            <GameItemLoading />
            <GameItemLoading />
            <GameItemLoading />
            <GameItemLoading />
            <GameItemLoading />
            <GameItemLoading />
            <GameItemLoading />
            <GameItemLoading />
            <GameItemLoading />
            <GameItemLoading />
            <GameItemLoading />
            <GameItemLoading />
          </>
        }
        {!loading && searchedGames.length === 0 && 
        <p 
          className='
            text-2xl
            text-center
            mx-auto
            flex
            col-span-3
            md:col-span-4
            p-4
          '
        >
          No hay coincidencias... 😢
        </p>}
        {searchedGames.map(
          (game,index) => (
            <GameItem key={index} gameName={game.name} imgURL={game.box_art_url}/>
          )
        )}
      </ListGames>
    </>
  )
}

export {SearchGames}