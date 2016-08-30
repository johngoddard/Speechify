import React from 'react';

const Sidebar = () => (
  <section className='sidebar'>
    {testContent}
  </section>
);

const testContent = (<ul className='nav-list'>
  <li className='sidebar-section'>
    <ul><span>DISCOVER</span>
      <li>Speeches</li>
      <li>Playlists</li>
    </ul>
  </li>
  <li className='sidebar-section'>
    <ul><span>CONNECT</span>
      <li>You Follow</li>
      <li>Find Friends</li>
    </ul>
  </li>
  <li className='sidebar-section'>
    <ul><span>PLAYLISTS</span>
      <li className='selected'>Playlist 1</li>
      <li>Playlist 2</li>
      <li>Playlist 3</li>
    </ul>
  </li>
</ul>);

export default Sidebar;
