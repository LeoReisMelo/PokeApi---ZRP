import routes from '~/infrastructure/routes/pokeApi/index';
import { Server } from "~/helpers/express";

const expressInstance = new Server();

expressInstance.init(routes);