import { RequestHandler } from 'express';

export interface RouteDefinition {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  path: string;
  middlewares: RequestHandler[];
  description?: string;
  handler: RequestHandler;
}