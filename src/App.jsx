import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import LocationInfo from './components/LocationInfo'
import ResidentInfo from './components/ResidentInfo'
import getRandomLocation from './utils/getRandomLocation'
import Rick from 'public/Rick.jpg'

function App() {

  const [location, setLocation] = useState()
  const [numberLocation, setNumberLocation] = useState(getRandomLocation())
  const [hasError, setHasError] = useState(false)



  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/location/${numberLocation}`
    axios.get(url)
      .then(res => {
        setLocation(res.data)
        setHasError(false)
      })
      .catch(err => {
        console.log(err)
        setHasError(true)
      })
  }, [numberLocation])


  const handleSubmit = e => {
    e.preventDefault()
    const inputLocation = document.getElementById('inputLocation')
    const value = inputLocation.value
    if (value >= 1 && value <= 126) {
      setNumberLocation(value)
    } else {
      setHasError(true)
    }
  }



  return (
    <div className="App">
      <header className='header__title'>
      </header>

      <form className='form' onSubmit={handleSubmit}>
        <input className='form__input' id='inputLocation' placeholder='Dimension 1 to 126' type="text" />
        
        <button className='form__button'> Find location</button>
      </form>
      {
        hasError ?
          <div>
          <h2 className='app__error'>🚩 Hey! You must provide a location from 1 to 126 🚩</h2>
          <div>
            <img className='app__img' src={Rick} alt='Rick' />
          </div>

          </div>
          
          :

          <>
            <LocationInfo location={location} />
            <div className='residents__container'>
              {
                location?.residents.map(url => (
                  <ResidentInfo
                    key={url}
                    url={url}
                  />
                ))
              }
            </div>
          </>
      }
    </div>
  )
}

export default App
