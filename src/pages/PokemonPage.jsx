import { useEffect } from "react"
import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import '../components/PokemonPage/pokemonPage.css'


const PokemonPage = ({type}) => {

  const { id } = useParams()

  const urlP = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'
  const [ pokemons,  ] = useFetch(urlP)
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  const [ pokemon, getPokemon ] = useFetch(url)
    
  useEffect(() => {
    getPokemon()
  }, [])
  
console.log(pokemons)
  return (
    <div className={`containerTwo ${pokemon?.types[0].type.name}`} >
      <div>
      <img src="/nav.png" alt="" />
      <img className="imgPokedex " src="/Pokedex.png" alt="" />
      </div>
     <section className="sectionOne">
      <p className="headerP" ></p>
      <img className="imgTwo" src={pokemon?.sprites.other["official-artwork"].front_default} alt="" />
      <article className="articleOne" >
      <h2>#{pokemon?.order}</h2>
      <h3 className="h3One">{pokemon?.name}</h3>
      <div className="divWeigthHeight">
        <p className="pWeight"><span className="spanWH">weight</span>{pokemon?.weight}</p>
        <p className="pHeight"><span className="spanWH">height</span>{pokemon?.height}</p>
      </div>
      <article className="articleType">
        <div className="divType">
        <h3 className="h3Type">Type</h3>
          <ul className="ulType">
            <li className="liTypeOne">{pokemon?.types[0].type.name}</li>
            <li className="liTypeTwo">{pokemon?.types[1].type.name}</li>
          </ul>
          </div>
          <div className="divAbilities">
        <h3 className="h3Abilities">Abilities</h3>
          <ul className="ulAbilities">
            <li className="liAbilitiesOne">{pokemon?.abilities[0].ability.name}</li>
            <li className="liAbilitiesTwo">{pokemon?.abilities[1].ability.name}</li>
          </ul>
          </div>
      </article>
      <section className="sectionProgress">
        <h3 className="h2OneProgress">Stats</h3>
          <p className="pProgress"><span className="spanProgress">{pokemon?.stats[0].stat.name}</span>{`${pokemon?.stats[0].base_stat}/150`}</p>
          <div className="divProgress ">
          <div className="progress skills__bar--70"style={{ '--progress-bar': `${pokemon?.stats[0].base_stat/ 150 * 100}%` }}></div>
          </div>

          <p className="pProgress"><span className="spanProgress">{pokemon?.stats[1].stat.name}</span>{`${pokemon?.stats[1].base_stat}/150`}</p>
          <div className="divProgress ">
          <div className="progress skills__bar--70"style={{ '--progress-bar': `${pokemon?.stats[1].base_stat/ 150 * 100}%` }}></div>
          </div>

          <p className="pProgress"><span className="spanProgress">{pokemon?.stats[2].stat.name}</span>{`${pokemon?.stats[2].base_stat}/150`}</p>
          <div className="divProgress ">
          <div className="progress skills__bar--70"style={{ '--progress-bar': `${pokemon?.stats[2].base_stat/ 150 * 100}%` }}></div>
          </div>

          <p className="pProgress"><span className="spanProgress">{pokemon?.stats[5].stat.name}</span>{`${pokemon?.stats[5].base_stat}/150`}</p>
          <div className="divProgress ">
          <div className="progress skills__bar--70"style={{ '--progress-bar': `${pokemon?.stats[5].base_stat/ 150 * 100}%` }}></div>
          <div className="divProgressSpace"></div>
          </div>
      </section>
      </article>
      </section>
      <section className="Movements">
      <h3 className="h3Movements">Movements</h3>
        <div className="divMovements">
        <ul className="ulMovements">
          {pokemon?.moves.slice(0, 35).map( (moves) => (
            <li className="liMovements" key={moves.move.url}>{moves.move.name}</li>
          ))}
        </ul>
        </div>
      </section>
    </div>
  )
}

export default PokemonPage