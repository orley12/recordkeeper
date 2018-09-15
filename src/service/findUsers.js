import Model from '../database/models';

const { User, Profile } = Model;

export default () => User.findAll({
  include: {
    model: Profile,
    as: 'profile',
  },
});
