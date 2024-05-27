import React from 'react';
import { Route, BrowserRouter, Routes as RouterRoutes } from 'react-router-dom';
import ListPokemon from './pages/Home';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <RouterRoutes>
        <Route path="/" element={<ListPokemon />} />
      </RouterRoutes>
    </BrowserRouter>
  );
}

export default Routes;