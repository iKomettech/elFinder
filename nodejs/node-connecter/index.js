const express = require('express');
const app = express();
const elFinder = require('./elfinder-node');
var cors = require('cors')

const roots = [
  {
    driver: elFinder.LocalFileStorage,
    URL: 'https://files.flowdev.pubskoler.com/', //Required
    path: '/var/www/html/FileServer/JournalDemo/PIH1131883/', //Required
    permissions: { read: 1, write: 1, lock: 0 },
  }
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

app.listen(process.env.PORT || 8000);