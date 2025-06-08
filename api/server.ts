import { createNodeRequestHandler } from '@angular/ssr/node';
import express from 'express';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = resolve(serverDistFolder, '../../dist/vet-marketplace/browser');

const app = express();

// Serve static files
app.use(express.static(browserDistFolder, {
  maxAge: '1y',
  index: false,
  redirect: false,
}));

// Create the request handler
const handler = createNodeRequestHandler(app);

// Export the handler for Vercel
export default handler; 