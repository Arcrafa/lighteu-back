const parse = require('pg-connection-string').parse;

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('HOST_DB'),
      port: env('PORT_DB'),
      database: env('DATABASE'),
      user: env('USER_DB'),
      password: env('PASS_DB'),
      ssl: {
        rejectUnauthorized: false
      },
    },
    debug: false,
  },
});
