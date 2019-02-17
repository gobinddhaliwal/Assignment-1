let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Home' });
});

router.get('/aboutme', (req, res, next) => {
  res.render('aboutme/index', { title: 'About Me' });
});

router.get('/contact', (req, res, next) => {
  res.render('contact/index', { title: 'Contact' });
});
//Configured Route for projects
router.get('/projects', (req, res, next) => {
  res.render('projects/index', { title: 'Projects' });
});
router.get('/projects/details-1', (req, res, next) => {
  res.render('projects/project1', { title: 'Projects' });
});
router.get('/projects/details-2', (req, res, next) => {
  res.render('projects/project2', { title: 'Projects' });
});
router.get('/projects/details-3', (req, res, next) => {
  res.render('projects/project3', { title: 'Projects' });
});
// configured route for services
router.get('/services', (req, res, next) => {
  res.render('services/index', { title: 'Services' });
});

module.exports = router;
