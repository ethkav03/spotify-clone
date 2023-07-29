import React from 'react';
import "../css/TrackOption.css";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const getArtists = (artist) => {
  const b = []
  artist.forEach((a) => {
    b.push(a.name)
  })

  return b.join(", ")
}

function TrackOption({ cover, title, artists, length }) {
  return (
    <div className='track'>
      <div className='trackOption'>
        <PlayArrowIcon />
        <img  src={cover} alt="" />
        <div className='trackOption_info'>
          <h4>{title}</h4>
          <p>{getArtists(artists)}</p>
        </div>
    </div>
    <div className='trackOption_actions'>
      <FavoriteBorderIcon />
      <br />
      <p>{Math.floor(length/60000)}:{(Math.floor((length/1000)%60)).toString().padStart(2, '0')}</p>
      <MoreHorizIcon />
    </div>
    </div>
  )
}

export default TrackOption