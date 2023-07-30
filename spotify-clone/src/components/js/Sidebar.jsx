import React from 'react';
import "../css/Sidebar.css";
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerValue } from '../../DataLayer';

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();

  return (
    <div className='sidebar'>
      <SidebarOption title="Home" Icon={HomeIcon} />
      <SidebarOption title="Search" Icon={SearchIcon} />
      <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />

      <br />
      <strong className='sidebar_title'>PLAYLISTS</strong>
      <hr />

      {playlists?.items?.map(playlist => (
        <SidebarOption title={playlist.name} />
      ))}
    </div>
  )
}

export default Sidebar