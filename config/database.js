module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-ce0d5r9a6gdsa614qsag-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_y3mj'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'O6UczswdT4JefH55zqx5ZLBSDzCEXHfw'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
