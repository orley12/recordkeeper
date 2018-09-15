import config from '../config/constants';

const { DATABASE_URL } = config();
console.log(DATABASE_URL);

module.exports = {
  development: {
    use_env_variable: true,
    url: DATABASE_URL,
    dialect: 'postgres',
  },
  test: {
    use_env_variable: true,
    url: DATABASE_URL,
    dialect: 'postgres',
  },
  production: {
    use_env_variable: true,
    url: DATABASE_URL,
    dialect: 'postgres',
  },
};
