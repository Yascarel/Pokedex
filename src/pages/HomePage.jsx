import { useRef } from "react"
import { setTrainerG } from "../store/trainer.state"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import '../components/Homepage/HomePage.css'


const HomePage = () => {

  const inputTrainer = useRef()

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(setTrainerG(inputTrainer.current.value.trim()))
    navigate('/pokedex')
  }

  return (
    <>
    <div className="container">
      <article>
      <img src="/Pokedex.png" alt="" />
      <h2>Hi trainer!</h2>
      <p>To star this app, give me your trainer name</p>
      <form onSubmit={handleSubmit}>
        <input ref={inputTrainer} type="text" placeholder="Your name" />
        <button>Catch them all</button>
      </form>
      </article>
      <footer>
    <img className="imgOne" src="/footer.png" alt="" />
  </footer>
    </div>
    </>
  )
}

export default HomePage