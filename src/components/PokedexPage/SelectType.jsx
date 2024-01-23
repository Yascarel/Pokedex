import { useEffect, useRef } from "react"
import useFetch from "../../hooks/useFetch"



const SelectType = ({setTypeSelected}) => {

  const url = 'https://pokeapi.co/api/v2/type'
  const [ types, getTypes ] = useFetch(url)

  useEffect(() => {
   getTypes()
  
  }, [])

  const typeRef = useRef()
  
const handlChange = () => {
  setTypeSelected(typeRef.current.value)
}
console.log(types)

  return (
    <select className="selectPokemons" ref={typeRef} onChange={handlChange}>
      <option className="optionPokemons" value='allPokemons'>All Pokemons</option>
      {
        types?.results.map(type => (
          <option  key={type.url} value={type.url}>{type.name}</option>
        ))
      }
    </select>
  )
}

export default SelectType