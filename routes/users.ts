import express from 'express'
var router = express.Router();

/* GET users listing. */
router.get('/', function(req: express.Request, res:express.Response, next: express.NextFunction) {
  res.json({
    name: 'yujiro',
    age: 29,
    work: "engineer"
  });
});

module.exports = router;
