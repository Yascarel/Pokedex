
import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import { useEffect, useRef, useState } from "react"
import PokeCard from "../components/PokedexPage/PokeCard"
import SelectType from "../components/PokedexPage/SelectType"
import Pagination from "../components/pagination/Pagination"

const PokedexPage = () => {

const [inputValue, setInputValue] = useState('')
const [typeSelected, setTypeSelected] = useState('allPokemons')



const trainerName = useSelector (states => states.trainer)

const url = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'
const [ pokemons, getPokemons, getTypePokemon ] = useFetch(url)

const toltalProducts = pokemons?.results.length || 0;
const [pokemonsPage, setPokemonsPage] = useState(8)
const [currentPage, setCurrentPage] = useState(1)

const lastIndex = currentPage * pokemonsPage
const firstIndex = lastIndex - pokemonsPage

useEffect(() => {
  if(typeSelected === 'allPokemons') {
    getPokemons()
  } else {
    getTypePokemon(typeSelected)
  }
  
  
}, [typeSelected])

 console.log(pokemons)
  const inputName = useRef()

  const handleSearch = e => {
    e.preventDefault()
    setInputValue(inputName.current.value.trim().toLowerCase())
  }

  const cbFilter = (pokeInfo) => pokeInfo.name.toLowerCase().includes(inputValue)
console.log(pokemons)
  return (
    <>
    <div>
      <article className="article-header">
        <img className="imgNav" src="/nav.png" alt="" />
        <img className='imgPokedex' src="/Pokedex.png" alt="" />
      </article>
      <div className="divCard">
      <h2 className="hWelcome"><span className="spanWelcome">Welcome {trainerName}</span>, here you cam find your favorite pokemon</h2>
      <article className="articleFormSelect">
      <form className="formPokemons" onSubmit={handleSearch}>
        <input className="inputPokemons" placeholder="Find a Pokemon" ref={inputName} type="text" />
        <button className="buttonPokemons">Search</button>
      </form>
      <SelectType setTypeSelected={setTypeSelected}/>
      </article>
      <div className="divTwoPokedexPage">
        {
          pokemons?.results.filter(cbFilter).map( pokeInfo => (
            <PokeCard 
              key={pokeInfo.url}
              url={pokeInfo.url}
              
            />
            
          )).slice(firstIndex, lastIndex)
          
        }
        
        </div>
      </div>
      <Pagination 
      pokemonsPage={pokemonsPage} 
      currentPage={currentPage} 
      setCurrentPage={setCurrentPage}
      toltalProducts={toltalProducts}/>
    </div>
    </>
  )
}

export default PokedexPage