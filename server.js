//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the angularapp directory
app.use(express.static(__dirname + '/dist/browser'));
  // All regular routes use the Universal engine
  app.get('/*', (req, res) => {
    const supportedLocales = ['en', 'ua'];
    const defaultLocale = 'en';
    const matches = req.url.match(/^\/([a-z]{2}(?:-[A-Z]{2})?)\//);
    // check if the requested url has a correct format '/locale' and matches any of the supportedLocales
    const locale = (matches && supportedLocales.indexOf(matches[1]) !== -1) ? matches[1] : defaultLocale;

    res.sendFile(path.join(__dirname+`/dist/browser/${locale}/index.html`));
  });

  // Start up the Node server
 app.listen(process.env.PORT || 8090);

