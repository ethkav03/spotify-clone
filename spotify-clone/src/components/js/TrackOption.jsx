import React from 'react'
import "../css/TrackOption.css"

function TrackOption({ cover, title, artist, length }) {
  return (
    <div className='trackOption'>
        <img  src={cover} alt="" />
        <div className='trackOption_info'>
          <h4>{title}</h4>
          <p>{artist}</p>
        </div>
        <p>{Math.floor(length/60000)}:{(Math.floor((length/1000)%60)).toString().padStart(2, '0')}</p>
    </div>
  )
}

export default TrackOption