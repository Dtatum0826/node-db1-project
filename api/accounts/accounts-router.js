const router = require('express').Router()
const middleware = require('./accounts-middleware')

router.get('/', (req, res, next) => {
  // DO YOUR MAGIC
  try{
res.json([{},{}])
} catch(err){
   next(err) 
  }
})

router.get('/:id', middleware.checkAccountId, (req, res, next) => {
  // DO YOUR MAGIC
  try{
res.json('get accounts by id')
  } catch(err){
   next(err) 
  }
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
