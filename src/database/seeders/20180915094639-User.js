/* eslint-disable no-unused-vars */

export default {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Users', [
    {
      id: 300,
      firstName: 'John',
      lastName: 'Doe',
      imageUrl: 'https://img.icons8.com/bubbles/50/000000/night-man.png',
      dob: '2199-10-12',
      age: 40,
      createdAt: '2019-01-06T10:04:46.419Z',
      updatedAt: '2019-01-06T10:04:46.419Z',
    },
    {
      id: 301,
      firstName: 'Sam',
      lastName: 'Doe',
      imageUrl: 'https://img.icons8.com/bubbles/50/000000/sun-man.png',
      dob: '2159-10-12',
      age: 80,
      createdAt: '2019-02-06T10:04:46.419Z',
      updatedAt: '2019-02-06T10:04:46.419Z',
    },
    {
      id: 302,
      firstName: 'Anna',
      lastName: 'Doe',
      imageUrl: 'https://img.icons8.com/emoji/48/000000/woman-technologyst.png',
      dob: '2179-10-12',
      age: 22,
      createdAt: '2019-03-06T10:04:46.419Z',
      updatedAt: '2019-03-06T10:04:46.419Z',
    },
    {
      id: 303,
      firstName: 'Mary',
      lastName: 'Doe',
      imageUrl: 'https://img.icons8.com/color/48/000000/old-woman.png',
      dob: '2169-16-12',
      age: 70,
      createdAt: '2019-04-06T10:04:46.419Z',
      updatedAt: '2019-04-06T10:04:46.419Z',
    },
  ], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),
};
