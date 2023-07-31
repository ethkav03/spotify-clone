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
      <SidebarOption key="home" title="Home" Icon={HomeIcon} />
      <SidebarOption key="search" title="Search" Icon={SearchIcon} />
      <SidebarOption key="library" title="Your Library" Icon={LibraryMusicIcon} />

      <br />
      <strong className='sidebar_title'>PLAYLISTS</strong>
      <hr />

      {playlists?.items?.map(playlist => (
        <SidebarOption key={playlist.href} title={playlist.name} />
      ))}
    </div>
  )
}

export default Sidebar