const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/angular-basics'));

app.listen(process.env.PORT || 8090);

app.get('/*', function(req,res) {

  res.sendFile(path.join(__dirname+'/dist/angular-basics/index.html'));
});

console.log('Console listening!')
// Start the app by listening on the default Heroku port

