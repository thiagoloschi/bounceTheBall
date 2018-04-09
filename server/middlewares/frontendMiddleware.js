/* eslint-disable global-require */
const schema = require('./schema');
const mongoose = require('mongoose');
/**
 * Front-end middleware
 */
module.exports = (app, options) => {
  const isProd = process.env.NODE_ENV === 'production';

  mongoose.connect(process.env.DATABASE_BOUNCE_URI);
  const Ranking = mongoose.model('ranking', schema);

  app.get('/me', (req, res) => {
    res.send('Thiago Loschi');
  });

  app.get('/ranking', (req, res) => {
    Ranking.find({}, '-_id player score stage', (err, rank) => {
      res.json(rank);
    }).sort({ score: -1 });
  });

  app.post('/ranking', (req, res) => {
    const play = new Ranking(req.body);
    play.save((err) => {
      if (err) {
        res.send('Something went wrong', err);
      }
      res.send(`${play.player} has just been saved`);
    });
  });

  if (isProd) {
    const addProdMiddlewares = require('./addProdMiddlewares');
    addProdMiddlewares(app, options);
  } else {
    const webpackConfig = require('../../internals/webpack/webpack.dev.babel');
    const addDevMiddlewares = require('./addDevMiddlewares');
    addDevMiddlewares(app, webpackConfig);
  }

  return app;
};
