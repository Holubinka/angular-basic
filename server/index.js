const compression = require('compression');
const path = require('path');
const express = require('express');
const locale = require('locale');
const supportedLocales = ['en', 'uk'];
const app = express();
const port = process.env.PORT || 8080;

app.use(compression());

app.use(express.static(`${__dirname}/../dist`));

app.use(locale(supportedLocales));

app.listen(port);

app.get('/*', (req, res) => {
  const matches = req.url.match(/^\/([a-z]{2}(?:-[A-Z]{2})?)\//);
  const locale = matches && supportedLocales.indexOf(matches[1]) !== -1 ? matches[1] : req.locale;
  res.sendFile(path.join(`${__dirname}/../dist/${locale}/index.html`));
});

