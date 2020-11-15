// Update with your config settings.

module.exports = {

    development: {
      client: 'mysql',
      connection: {
        host : '127.0.0.1',
        user : 'userpi',
        password : 'shunda2020',
        database : 'pi',
        charset: 'utf8'
      },
      migrations: {
        tableName: 'knex_migrations',
        directory: `${__dirname}/src/database/migrations`
      }
    }
  
  };
  