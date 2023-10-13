const { resolve } = require('path');
const express = require('express');
const app = express();
const elFinder = require('./elfinder-node');
var cors = require('cors')
const uploadsDir = resolve(__dirname, '../media/uploads');
const roots = [
  {
    driver: elFinder.LocalFileStorage,
    URL: '', //Required
    path: uploadsDir, //Required
    permissions: { read: 1, write: 1, lock: 0 },
  },
];

const corsOpts = {
  origin: '*',

  methods: [
    'GET',
    'POST',
    'OPTIONS',
    'PUT',
    'DELETE'
  ],

  allowedHeaders: [
    'Content-Type',
  ],
};

app.use(cors(corsOpts));
app.use('/connector', elFinder(roots));

const port = process.env.PORT || 8000
app.listen(port , function(){
  console.log('Listening on port: ' + port);
});