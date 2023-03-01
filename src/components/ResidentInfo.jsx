import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './styles/residentInfo.css'

const ResidentInfo = ({ url }) => {

    const [character, setCharacter] = useState()

    useEffect(() => {
        axios.get(url)
            .then(res => setCharacter(res.data))
            .catch(err => console.log(err))
    }, [])


  return (
    <article className='resident'>
        <header className='resident__header'>
            <img className='resident__img' src={character?.image} alt="resident image" />
            <div className='resident__container-status'>
                <span className={`resident__circle ${character?.status}`}></span>
                <span className='resident__status'>{character?.status}</span>
            </div>
        </header>
        <section className='resident__body'>
            <h3 className='resident__name'>{character?.name}</h3>
            <hr className='resident__hr'/>
            <ul className='resident__list'>
                <li className='resident__item'>Species <span className='resident__label'>{character?.species}</span></li>
                <li className='resident__item'>Origin <span className='resident__label'>{character?.origin.name}</span></li>
                <li className='resident__item'>Episodes where appear: <span className='resident__label'>{character?.episode.length}</span></li>
            </ul>
        </section>
    </article>
  )
}

export default ResidentInfo 