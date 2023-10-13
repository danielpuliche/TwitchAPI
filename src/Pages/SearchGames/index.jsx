import React from 'react'
import { Header } from '../../components/Header'
import { SearchBar} from '../../components/SearchBar'
import { ListGames } from '../../components/ListGames'
import { GameItem } from '../../components/GameItem'

const SearchGames = () => {

  const defaultGames = [
    {
      "name":"Minecraft",
      "img":"X"
    },
    {
      "name":"Roblox",
      "img":"X"
    },
    {
      "name":"GTA V",
      "img":"X"
    },  
    {
      "name":"Terraria",
      "img":"X"
    },
    {
      "name":"Apex Legends",
      "img":"X"
    },    
  ]

  const [games,setGames] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')
  
  const searchedGames = defaultGames.filter(
    (game) => !!game.name.toUpperCase().includes(searchValue.toUpperCase())
  )

  React.useEffect(
    () => {
      try {
        console.log('Effect');
      } catch (error) {
        
      }
    }
  ,[])

  return (
    <>
      <Header title="SEARCH GAMES"/>
      <SearchBar 
        setSearchValue={setSearchValue}
      />
      <ListGames>
        {searchedGames.map(
          (game) => (
            <GameItem key={game.name} gameName={game.name}/>
          )
        )}
      </ListGames>
    </>
  )
}

export {SearchGames}