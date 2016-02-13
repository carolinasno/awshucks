var express = require('express');
var passport = require('passport');
var Account = require('../models/account');
var Oyster = require('../models/oyster');
var router = express.Router();

router.get('/api/oysters', function(req, res){
  Oyster.find({}, function(err, dbOysters){
    res.json(dbOysters);
  });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { user: req.user });
});

router.get('/register', function(req, res){
  res.render('register', {});
});

router.post('/register', function(req, res){
  Account.register(new Account({username: req.body.username}), req.body.password, function(err, account){
    if (err) {
      return res.render('register', {info: "Sorry. That username already exists. Try again."});
    }
    passport.authenticate('local')(req, res, function(){
      res.redirect('/');
    });
  });
});

router.get('/login', function(req, res){
  res.render('login', {user: req.user});
});

router.post('/login', passport.authenticate('local'), function(req, res){
  res.redirect('/');
});

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

router.get('/oysters', function(req, res){
  res.render('oysters', {});
});

module.exports = router;
