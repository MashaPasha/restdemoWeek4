var express = require('express');
const Course = require('../models/course');
var router = express.Router();

const courses = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Add a course' });
});

/* GET home page. */
router.get('/courses', function(req, res, next) {
  res.render('courses', { title: 'Course listing' });
});

 
router.post('/api/courses', (req, res) =>{
   //validatio logic 
   if (!req.body.title || !req.body.description || !req.body.courseNo){    /// CHECK WHY IT'S DO NOT WORK
     return res.status(400).json({msg : "invalid course information"});
   }
   
  let course = new Course(req.body);
  console.log(course);

  courses.push(course);

  res.json({status: "sucess", message: 'Couse was added'});
});

router.get('/api/courses',(req, res) => {
    res.json(courses);
});

/* get one element from mashka */
router.get('/api/courses/:courseNo', function(req, res, next) {
  const course = courses.find(e => e.courseNo === req.params.courseNo);

  if(!course) {
    return res.status(404).send(`Course ${req.params.courseNo} not found`);
   }

  res.json(course);
});

/*delete course / ffrom mashaka */
router.delete('/api/courses/:courseNo', function(req, res, next) {
  let wasDeleted = false;
  
  for(let i = 0; i < courses.length; i++){ 
    if ( courses[i].courseNo === req.params.courseNo) {
      courses.splice(i, 1); 
      wasDeleted = true;
      i--;
    }
 }

 if(!wasDeleted) {
  return res.status(404).send(`Course ${req.params.courseNo} not found`);
 }

  res.json({status: "sucess", message: 'Couse was deleted'});
});


module.exports = router;