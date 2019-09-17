// const express = require('express');
// const path = require('path');
// const nomeApp = process.env.npm_package_name;
// const app = express();
 
// app.use(express.static(`$/dist/$`));
 
// app.get('/*', (req, res) => {
// res.sendFile(path.join(`$/dist/$/index.html`));
// });
 
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/cotacao-escolar-frontend'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/cotacao-escolar-frontend/index.html'));
});

app.listen(process.env.PORT || 4200);