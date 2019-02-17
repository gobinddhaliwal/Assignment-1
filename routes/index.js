let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Home' });
});

router.get('/aboutme', (req, res, next) => {
  res.render('aboutme/index', { title: 'About Me' });
});
router.get('/resume', (req, res, next) => {
  res.render('resume', { title: 'About Me' });
});


router.get('/contact', (req, res, next) => {
  res.render('index', { title: 'Contact' });
});

router.get('/projects', (req, res, next) => {
  res.render('index', { title: 'Projects' });
});

router.get('/services', (req, res, next) => {
  res.render('index', { title: 'Services' });
});

module.exports = router;
