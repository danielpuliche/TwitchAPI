import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {Home} from './Pages/Home'
import {TopGames} from './Pages/TopGames'
import {SearchGames} from './Pages/SearchGames'

function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route 
            element={<Home />}
            index
            ></Route>
          <Route 
            element={<TopGames />}
            path='/TopGames'
          ></Route>
          <Route 
            element={<SearchGames />}
            path='SearchGames'
          ></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
