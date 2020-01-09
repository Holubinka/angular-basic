//Install express server
const path = require('path');
const express = require('express');
/*const locale = require('locale');
const supportedLocales = ['en', 'ua'];*/
const app = express();
const port = process.env.PORT || 8080;// Gzip
// Serve static files from the dist directory
app.use(express.static(__dirname + '/dist/browser/ua'));// Detect locale and determine best match

//app.use(locale(supportedLocales));// Start the app by listening on the default Heroku port
app.listen(port);// Return index.html for all GET requests for PathLocationStrategy
// And accept locale style URLs: /en/example
app.get('/*', function(req, res) {

  res.sendFile(path.join(__dirname + '/dist/browser/ua/index.html'));
});console.log(`Server listening on ${port}`);
