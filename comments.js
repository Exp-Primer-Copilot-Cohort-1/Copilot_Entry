// Create web server

var express = require('express');
var router = express.Router();
var Comments = require('../models/comments');
var User = require('../models/user');
var Post = require('../models/post');
var mongoose = require('mongoose');
var passport = require('passport');
var jwt = require('jsonwebtoken');

// GET: http://localhost:3000/comments
router.get('/', function(req, res, next) {
  Comments.find(function(err, comments) {
    if (err) return next(err);
    res.json(comments);
  });
});

// GET: http://localhost:3000/comments/1
router.get('/:id', function(req, res, next) {
  Comments.findById(req.params.id, function(err, comments) {
    if (err) return next(err);
    res.json(comments);
  });
});

// POST: http://localhost:3000/comments
router.post('/', function(req, res, next) {
  Comments.create(req.body, function(err, comments) {
    if (err) return next(err);
    res.json(comments);
  });
});

// PUT: http://localhost:3000/comments/1
router.put('/:id', function(req, res, next) {
  Comments.findByIdAndUpdate(req.params.id, req.body, function(err, comments) {
    if (err) return next(err);
    res.json(comments);
  });
});

// DELETE: http://localhost:3000/comments/1
router.delete('/:id', function(req, res, next) {
  Comments.findByIdAndRemove(req.params.id, req.body, function(err, comments) {
    if (err) return next(err);
    res.json(comments);
  });
});

module.exports = router;