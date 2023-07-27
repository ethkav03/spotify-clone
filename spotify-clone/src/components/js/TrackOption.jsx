import React from 'react'

function TrackOption({ title }) {
    console.log("title", title);
  return (
    <div className='trackOption'>
        <p>{title}</p>
    </div>
  )
}

export default TrackOption