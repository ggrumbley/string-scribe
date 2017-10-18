module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'stringscribe',
    user: process.env.DB_USER || 'stringscribe',
    password: process.env.DB_PASS || 'stringscribe',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './stringscribe.sqlite'
    }
  }
}