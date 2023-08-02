import React from 'react';
import "../css/Body.css";
import Header from './Header';
import { useDataLayerValue } from '../../DataLayer';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import TrackOption from './TrackOption';

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  const [{ user }] = useDataLayerValue();
  

  const getDuration = (tracks) => {
    if (discover_weekly) {
      let total = 0;
      tracks.forEach((track) => {
        total += track?.track?.duration_ms;
      })

      return `${Math.floor(total/3600000)} hr ${(Math.floor((total/1000)%600)).toString().padStart(2, '0')} mins`;
    }
  };

  const playPlaylist = (_) => {
    spotify
      .play({
        context_uri: `spotify:playlist:37i9dQZEVXcIdfEM4Znmmq`,
      })
      .then((_) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          console.log("r", r);
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  return (
    <div className='body'>
      <Header spotify={spotify} />

      <div className="body_info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body_infoText">
          <strong>Playlist</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
          <br />
          <p><img src="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png" alt='Spotify Logo' /> Made for {user?.display_name}  -  {discover_weekly?.tracks?.total} songs, {getDuration(discover_weekly?.tracks?.items)}</p>
        </div>
      </div>

      <div className="body_songs">
        <div className="body_icons">
          <PlayCircleFilledIcon className="body_shuffle" onClick={playPlaylist} />
          <FavoriteBorderIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        {discover_weekly?.tracks?.items?.map(track => (
        <TrackOption key={track.track.id} id={track.track.id} cover={track.track?.album?.images[0].url} title={track.track?.name} artists={track.track?.artists} length={track.track?.duration_ms} album={track.track?.album} />
      ))}
      </div>
    </div>
  )
}

export default Body