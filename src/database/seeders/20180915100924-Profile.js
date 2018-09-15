
export default {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Profiles', [
    {
      height: '6.3ft',
      weight: '75kg',
      hairColor: 'black',
      userId: 300,
      createdAt: '2019-01-06T10:04:46.419Z',
      updatedAt: '2019-01-06T10:04:46.419Z',
    },
    {
      height: '6.4ft',
      weight: '50kg',
      hairColor: 'black',
      userId: 301,
      createdAt: '2019-02-06T10:04:46.419Z',
      updatedAt: '2019-02-06T10:04:46.419Z',
    },
    {
      height: '5.3ft',
      weight: '60kg',
      hairColor: 'blonde',
      userId: 302,
      createdAt: '2019-03-06T10:04:46.419Z',
      updatedAt: '2019-03-06T10:04:46.419Z',
    },
    {
      height: '5.7ft',
      weight: '70kg',
      hairColor: 'blonde',
      userId: 303,
      createdAt: '2019-04-06T10:04:46.419Z',
      updatedAt: '2019-04-06T10:04:46.419Z',
    },
  ], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Profiles', null, {}),
};
