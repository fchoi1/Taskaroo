module.exports = {
    development: {
      client: 'pg',
      connection: {
        host: 'localhost',
        port: '5432',
        user: 'your_username',
        password: 'your_password',
        database: 'your_database',
      },
      migrations: {
        directory: '.src/db/migrations',
      },
      seeds: {
        directory: '.src/db/seeds',
      },
    },
  };
  