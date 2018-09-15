import { respondWithSuccess, respondWithWarning } from '../utils/responseUtil';
import createUser from '../service/createUser';

export default async (req, res) => {
  const { body } = req;
  try {
    const user = await createUser(body);

    return respondWithSuccess(res, 201, 'user created', user);
  } catch (error) {
    console.log(error);

    return respondWithWarning(res, 500, 'internal server error');
  }
};
