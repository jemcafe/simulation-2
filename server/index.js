const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const session = require('express-session');
require('dotenv').config();

const app = express();
app.use( bodyParser.json() );
app.use( cors() );
// app.use( session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: true
// }));

app.get('/api/properties', )

massive( process.env.CONNECTION_STRING ).then( 
    dbInstance => { app.set('db', dbInstance) }
);

const port = process.env.PORT;
app.listen( port, () => console.log( 'Listening on port: ' + port ) );