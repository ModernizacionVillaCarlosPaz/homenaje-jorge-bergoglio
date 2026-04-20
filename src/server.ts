import { AngularNodeAppEngine, writeResponseToNodeResponse } from '@angular/ssr/node';
import express from 'express';
import { join } from 'node:path';

export function app(): express.Express {
  const server = express();
  const browserDistFolder = join(import.meta.dirname, '../browser');
  const angularApp = new AngularNodeAppEngine();

  server.use(
    express.static(browserDistFolder, {
      maxAge: '1y',
      index: false,
      redirect: false,
    }),
  );

  server.use((req, res, next) => {
    angularApp
      .handle(req)
      .then((response) => (response ? writeResponseToNodeResponse(response, res) : next()))
      .catch(next);
  });

  return server;
}

const serverApp = app();

// Exportar el handler requerido por Angular SSR
export const reqHandler = (req: any, res: any, next: any) => {
  return serverApp(req, res, next);
};

export * from '../src/main.server';
