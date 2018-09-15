import Model from '../database/models';

const { Profile } = Model;
export default (userId) => Profile.destroy({
  where: {
    userId,
  },
});
