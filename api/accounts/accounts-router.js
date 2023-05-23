const router = require('express').Router()

router.get('/', (req, res, next) => {
  // DO YOUR MAGIC
  try{
res.json([{},{}])
} catch(err){
   next(err) 
  }
})

router.get('/:id', (req, res, next) => {
  // DO YOUR MAGIC
  try{
res.json('get accounts by id')
  } catch(err){
   next(err) 
  }
})

router.post('/', (req, res, next) => {
  // DO YOUR MAGIC
  try{
res.json(' POST get accounts')
  } catch(err){
   next(err) 
  }
})

router.put('/:id', (req, res, next) => {
  // DO YOUR MAGIC
  try{
res.json('PUT get accounts')
  } catch(err){
   next(err) 
  }
});

router.delete('/:id', (req, res, next) => {
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
