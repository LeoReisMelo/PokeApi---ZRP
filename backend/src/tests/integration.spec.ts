import axios from 'axios';
import { Server } from '~/helpers/express';
import routes from '~/infrastructure/routes/pokeApi/index';

describe('Integration tests for GetAllPokemons and FindPokemon', () => {
  let expressInstance: Server;
  let app: any;
  let server: any;

  beforeAll(() => {
    expressInstance = new Server();
    const serverInfo = expressInstance.init(routes);
    app = serverInfo.app;
    server = serverInfo.server;
  });

  afterAll((done) => {
    server.close(done);
  });

  it('should get all pokemons', async () => {
    const response = await axios.get('http://localhost:3333/pokemon/all/1?limit=10');
    expect(response.status).toBe(200);
    expect(response.data.results).toBeDefined();
  });

  it('should find a pokemon by name', async () => {
    const response = await axios.get('http://localhost:3333/pokemon/pikachu');
    expect(response.status).toBe(200);
    expect(response.data).toBeDefined();
    expect(response.data).toContain('lightning-rod');
    expect(response.data).toContain('static');
  });
});