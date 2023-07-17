const express = require('express');
const app = express();
const elFinder = require('elfinder-node');
var cors = require('cors')

const roots = [
  {
    driver: elFinder.LocalFileStorage,
    URL: '/uploads/', //Required
    path: '/path/to/dir', //Required
    permissions: { read: 1, write: 1, lock: 0 },
  },
  {
    driver: elFinder.LocalFileStorage,
    URL: '/404/', //Required
    path: 'private', //Required
    permissions: { read: 1, write: 0, lock: 1 },
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

app.listen(process.env.PORT || 8000);