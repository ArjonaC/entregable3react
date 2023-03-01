import React from 'react'
import './styles/locationInfo.css'


const LocationInfo = ({ location }) => {


  return (
    <article className='location__title'>
      <h2 className='location__name'>{location?.name}</h2>
      <hr className='resident__hr'/>
      <ul className='location__list'>
        <li className='location__item'>Type <span className='location__label'>{location?.type}</span></li>
        <li className='location__item'>Dimension <span className='location__label'>{location?.dimension}</span></li>
        <li className='location__item'>Population <span className='location__label'>{location?.residents.length}</span></li>
      </ul>
    </article>
  )
}

export default LocationInfo