exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
  // Note: you can either write "manual" validation logic
  // or use the Yup library (not currently installed)
  console.log('checking middleware PAyload')
  next()

}

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
  console.log('checking middleware Name uNiqwur')
  next()
}

exports.checkAccountId = (req, res, next) => {
  // DO YOUR MAGIC
 console.log('checking middleware ID')
  next()
}
