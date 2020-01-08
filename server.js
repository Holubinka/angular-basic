//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the angularapp directory
app.use(express.static(__dirname + '/angularapp'));
  // All regular routes use the Universal engine
  app.get('/*', (req, res) => {
    const supportedLocales = ['ua', 'en'];
    const defaultLocale = 'ua';
    const matches = req.url.match(/^\/([a-z]{2}(?:-[A-Z]{2})?)\//);
    // check if the requested url has a correct format '/locale' and matches any of the supportedLocales
    const locale = (matches && supportedLocales.indexOf(matches[1]) !== -1) ? matches[1] : defaultLocale;

    res.render(`${locale}/index`, {req});
    res.sendFile(path.join(__dirname+`/${locale}/index.html`));
  });

  // Start up the Node server
 app.listen(process.env.PORT || 8080);

