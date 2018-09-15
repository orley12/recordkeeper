import Model from '../database/models';

const { Profile } = Model;

export default (userId, profile) => Profile.update(
  { ...profile },
  {
    where: { userId },
    returning: true,
    plain: true,
  },
);
