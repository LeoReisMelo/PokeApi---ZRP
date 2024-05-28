import React from 'react';
import Navbar from './components/navBar';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes />
    </>
  );
}

export default App;