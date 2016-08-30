import React from 'react';
import Sidebar from './sidebar/sidebar.jsx';
import Header from './header.jsx'


const App = ({children}) => (
  <main className='App group'>
    <Header />

    <Sidebar />

    <section className='content-area'>
      {children}
    </section>
  </main>
);

export default App;
