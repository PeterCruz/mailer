const express = require('express');
const router  = express.Router();
const mailer = require('../helpers/mailer');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('form');
});

router.post('/', (req,res) => {
  let options = req.body;
  options.filename = 'verify';
  mailer.send(options)
      .then(() => {
        res.status(200).send('el correo se mandó')
      })
      .catch(err => {
        console.log('algo salió mal', err)
      })
});

module.exports = router;
