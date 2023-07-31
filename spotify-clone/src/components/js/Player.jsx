import React from 'react';
import "../css/Player.css"
import Sidebar from './Sidebar';
import Body from './Body';
import Footer from './Footer'
import TopArtists from './TopArtists';

function Player({ spotify }) {
  return (
    <div className='player'>
        <div className="player_body">
            <Sidebar />
            <Body  spotify={spotify} />
            <TopArtists />
        </div>
        <Footer />
    </div>
  )
}

export default Player