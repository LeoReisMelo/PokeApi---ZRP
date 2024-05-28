import React from 'react';
import { Route, BrowserRouter, Routes as RouterRoutes } from 'react-router-dom';
import ListPokemon from './pages/Home';
import Abilities from './pages/Abilities';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <RouterRoutes>
        <Route path="/" element={<ListPokemon />} />
        <Route path="/abilities" element={<Abilities />}/>
      </RouterRoutes>
    </BrowserRouter>
  );
}

export default Routes;