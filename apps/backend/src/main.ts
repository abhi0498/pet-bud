import Fastify from 'fastify';
import { app } from './app/app';
import path from 'path';
import staticPlugin from '@fastify/static';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

// Instantiate Fastify with some config
const server = Fastify({
  logger: true,
});

server.register(staticPlugin, {
  root: path.join(__dirname, '../../../../my-pet-buddy'),
});
// Register your application as a normal plugin.
server.register(app);
//current directory
console.log(__dirname);

// Start listening.
server.listen({ port, host }, (err) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  } else {
    console.log(`[ ready ] http://${host}:${port}`);
  }
});
