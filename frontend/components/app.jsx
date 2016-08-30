import React from 'react';
import Sidebar from './sidebar/sidebar.jsx';


const App = ({children}) => (
  <main className='App group'>
    <Sidebar />
    {children}
  </main>
);

export default App;
