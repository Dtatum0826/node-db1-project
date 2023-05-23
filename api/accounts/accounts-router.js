const router = require('express').Router()
const middleware = require('./accounts-middleware')
const Account = require('./accounts-model')
router.get('/', async  (req, res, next) => {
  // DO YOUR MAGIC
  try{
    const accounts = await Account.getAll()
res.json(accounts)
} catch(err){
   next(err) 
  }
})

router.get('/:id', middleware.checkAccountId,  (req, res, next) => {
  // DO YOUR MAGIC
 res.json(req.account)
})

router.post('/', 
middleware.checkAccountPayload,
 middleware.checkAccountNameUnique,
  (req, res, next) => {
  // DO YOUR MAGIC
  try{
res.json(' POST get accounts')
  } catch(err){
   next(err) 
  }
})

router.put('/:id',
 middleware.checkAccountId,
  middleware.checkAccountPayload,
  middleware.checkAccountNameUnique,
  (req, res, next) => {
  // DO YOUR MAGIC
  try{
res.json('PUT get accounts')
  } catch(err){
   next(err) 
  }
});

router.delete('/:id', middleware.checkAccountId,
(req, res, next) => {
  // DO YOUR MAGIC
  try{
res.json(' DELETE get accounts')
  } catch(err){
   next(err) 
  }
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
  res.status(err.status || 500).json({
    message: err.message
  })
})

module.exports = router;
