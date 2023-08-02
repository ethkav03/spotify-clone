import React from 'react'
import "../css/TopArtists.css";
import { useDataLayerValue } from '../../DataLayer';

function TopArtists() {
  const [{ top_artists }, dispatch] = useDataLayerValue();
  console.log(top_artists)
  return (
    <div className='topArtists'>
        <h1>Top Artists</h1>
        {top_artists?.items?.map(artist => (
          <div key={artist.id} className="artist">
            <img src={artist.images[0].url} alt="" />
            <p>{artist.name}</p>
          </div>
        ))}
    </div>
  )
}

export default TopArtists