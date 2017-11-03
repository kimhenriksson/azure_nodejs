const express = require('express');
const router = express.Router();
const Article = require('../models/article');
const config = require('../../config/config') 

module.exports = (app) => {
  app.use('/', router);
};

router.get('/', (req, res, next) => {
  throw new Error("failed");
  const articles = [new Article(), new Article()];
  res.render('index', {
    title: config.app.name,
    articles: articles
  });
});
