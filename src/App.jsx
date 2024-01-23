
import { useSelector } from 'react-redux'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PokemonPage from './pages/PokemonPage'
import PokedexPage from './pages/PokedexPage'
import ProtectedRoutes from './pages/ProtectedRoutes'

function App() {

const trainerName = useSelector(states =>states.trainer)

console.log(trainerName)

  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route element={<ProtectedRoutes/>}>
      <Route path='/pokedex' element={<PokedexPage />} />
      <Route path='/pokedex/:id' element={<PokemonPage />} />
      </Route>
    </Routes>
    </>
  )
}

export default App
