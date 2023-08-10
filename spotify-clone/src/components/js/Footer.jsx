import "../css/Footer.css";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import { Grid, Slider } from '@mui/material';
import { useDataLayerValue } from '../../DataLayer';

function Footer(props) {
  const [{ current_track }, dispatch] = useDataLayerValue();

  const getArtists = (artist) => {
    if (artist) {
      const b = []
      artist.forEach((a) => {
        b.push(a.name)
      })
  
    return b.join(", ")
    }
  }

  console.log(current_track)

  return (
    <div className='footer'>
      <div className="footer_left">
        <img className='footer_albumLogo' src={current_track?.item?.album?.images[0].url} alt="" />
        <div className="footer_songInfo">
          <h4>{current_track?.item?.name }</h4>
          <p>{getArtists(current_track?.item?.artists)}</p>
        </div>
      </div>
      <div className="footer_center">
        <ShuffleIcon className='footer_green' />
        <SkipPreviousIcon className='footer_icon' />
        <PlayCircleOutlineIcon fontSize='large' className='footer_icon' />
        <SkipNextIcon className='footer_icon' />
        <RepeatIcon className='footer_green' />
      </div>
      <div className="footer_right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Footer