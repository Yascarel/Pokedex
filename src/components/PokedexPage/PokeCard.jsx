import { useEffect, useState } from "react"
import useFetch from "../../hooks/useFetch"
import { useNavigate } from "react-router-dom"
import './syles/PokeCard.css'



const PokeCard = ( {url} ) => {

  const [ pokemon, getPokemon ] = useFetch(url)
  
  useEffect(() => {
    getPokemon()
    
  }, [])

  const navigate = useNavigate()

  const hadleNavigatePokemon = () => {
    navigate(`/pokedex/${pokemon.id}`)
  }
  console.log(pokemon)
  return (
    <>
    <div className={`contenedor ${pokemon?.types[0].type.name}`} 
    onClick={hadleNavigatePokemon}>
      <article>
        <header>
          <img 
          src={pokemon?.sprites.other["official-artwork"].front_default} 
          alt="" 
          />
        </header>
        <section>
          <h3>{pokemon?.name}</h3>
          <ul className="ulOne">
            {
              pokemon?.types.map( (typeInfo) => (
                <li className="liOne" key={typeInfo.type.url}>
                  {typeInfo.type.name}
                  </li>
              ))
            }
          </ul>
          <hr />
          <ul className="ulTwo">
            {
              pokemon?.stats.map( (statsInfo) => (
                <li className="liTwo" key={statsInfo.stat.url}>
                  <span className="spanOne">{statsInfo.stat.name}</span>
                  <span className="spanTwo">{statsInfo.base_stat}</span>
                  </li>
              ))
            }
          </ul>
        </section>
      </article>
    </div>
    </>
  )
}

export default PokeCard