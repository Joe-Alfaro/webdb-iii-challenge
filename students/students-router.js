const knex = require('knex');
const router = require('express').Router();

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: './data/database.db3'
  },
  useNullAsDefault: true
});

router.get('/', (req, res) => {
  db('students')
    .then(students => {
      res
        .status(200)
        .json(students)
    })
    .catch(err => {
      res
        .status(500)
        .json(err)
    })
})

module.exports = router;
