import 'zone.js/dist/zone-node';
import { enableProdMode } from '@angular/core';

import * as express from 'express';
import { join } from 'path';

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Express server
const app = express();

const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist');

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));

// Example Express Rest API endpoints
// app.get('/api/**', (req, res) => { });

// Server static files from /browser
app.get('*.*', express.static(join(DIST_FOLDER, 'browser'), {
  maxAge: '1y'
}));

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  const supportedLocales = ['en', 'ua'];
  const defaultLocale = 'ua';
  const matches = req.url.match(/^\/([a-z]{2}(?:-[A-Z]{2})?)\//);
  //check if the requested url has a correct format '/locale' and matches any of the supportedLocales
  const locale = (matches && supportedLocales.indexOf(matches[1]) !== -1) ? matches[1] : defaultLocale;

  res.render("${locale}/index", {req});
});

// Start up the Node server
app.listen(PORT, () => {
  console.log(`Node Express server listening on http://localhost:${PORT}`);
});
