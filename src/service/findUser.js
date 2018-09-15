import Model from '../database/models';

const { User, Profile } = Model;

export default (id) => User.findOne({
  where: { id },
  include: {
    model: Profile,
    as: 'profile',
  },
});
