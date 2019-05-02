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
  db('cohorts')
    .then(cohorts => {
      res
        .status(200)
        .json(cohorts)
    })
    .catch(err => {
      res
        .status(500)
        .json(err)
    })
})

module.exports = router;
