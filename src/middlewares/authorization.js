const jwt = require('jsonwebtoken')

const JWT_SECRET = process.env.JWT_SECRET
// console.log(JWT_SECRET)

const authMiddleware = (req, res, next) => {
  const { authorization } = req.headers

  const token = authorization.split(' ')[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET)
    console.log(req.url)
    req.user = decoded.data
    req.permissions = decoded.data.permissions
    const url = req.url.replace(/\//g, ':').slice(1)
    console.log(url, req.user)

    if (req.user.permissions.indexOf(url) === -1) {
      return res.status(403).send({
        error: 'you shall not pass'
      })
    }
    next()
  } catch (err) {
    return res.status(403).send({
      error: err.message
    })
  }
}

module.exports = authMiddleware