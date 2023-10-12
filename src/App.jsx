import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css'
import {Home} from './components/Home'
import {TopGames} from './components/TopGames'
import {SearchGames} from './components/SearchGames'

function App() {
  const [count, setCount] = useState(0)

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
