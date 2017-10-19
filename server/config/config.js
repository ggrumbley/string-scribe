const path = require('path');

module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'stringscribe',
    user: process.env.DB_USER || 'stringscribe',
    password: process.env.DB_PASS || 'stringscribe',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: path.resolve(__dirname, '../../stringscribe.sqlite')
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'meeseeks'
  }
}