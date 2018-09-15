import Model from '../database/models';

const { User } = Model;

export default (user) => User.findOrCreate({
  where: {
    firstName: user.firstName,
    lastName: user.lastName,
  },
  defaults: { ...user },
});
