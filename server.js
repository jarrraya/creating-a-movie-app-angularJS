'use strict';

const
  path = require('path'),
  browsersync = require('browser-sync'),
  express = require('express'),
  app = express();

const bs = browsersync.create();

const tempData = [
  { title: "Titanic",
    type: 'Romantic',
    runningTime: '123mins',
    releaseDate: '23/04/1999',
    cover: {
      path: 'the-campaign.jpg',
      name: 'avatar' },
    story: 'some text for the movie\'s story' },
  { title: "Death pool",
    type: 'Action',
    runningTime: '103mins',
    releaseDate: '23/04/2014',
    cover: {
      path: 'the-campaign.jpg',
      name: 'interstellar' },
    story: 'some text for the movie\'s story' },
  { title: "Showlin Soccer",
    type: 'comidian',
    runningTime: '132mins',
    releaseDate: '23/04/2006',
    cover: {
      path: 'the-campaign.jpg',
      name: 'the-campaign' },
    story: 'some text for the movie\'s story' },
  { title: "The campaign",
    type: 'comidian',
    runningTime: '132mins',
    releaseDate: '23/04/2006',
    cover: {
      path: 'the-campaign.jpg',
      name: 'the-campaign' },
    story: 'some text for the movie\'s story' },
  { title: "Where is the millers",
    type: 'comidian',
    runningTime: '132mins',
    releaseDate: '23/04/2006',
    cover: {
      path: 'the-campaign.jpg',
      name: 'the-campaign' },
    story: 'some text for the movie\'s story' }
];

app.use(express.static(path.join(__dirname, './public')));

app.get('/api/movies', function ( req, res ) {
  res.json( tempData );
});

app.listen(8080, function () {
  bs.init({
    files: [
      'javascripts/*',
      'stylesheets/styles.css'
    ],
    proxy: 'http://localhost:8080'
  });
  console.log('Listening on port 8080');
});