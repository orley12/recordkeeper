import Model from '../database/models';

const { User } = Model;

export default (id) => User.destroy({
  where: {
    id,
  },
});
