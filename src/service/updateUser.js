import Model from '../database/models';

const { User } = Model;

export default (id, body) => User.update(
  { ...body },
  {
    where: { id },
    returning: true,
    plain: true,
  },
);
