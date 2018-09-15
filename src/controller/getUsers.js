import { respondWithWarning, respondWithSuccess } from '../utils/responseUtil';
import findUsers from '../service/findUsers';

export default async (req, res) => {
  try {
    const users = await findUsers();
    if (!users.length) {
      respondWithWarning(res, 200, 'no user have been added');
    }

    respondWithSuccess(res, 200, 'users found', users);
  } catch (error) {
    respondWithWarning(res, 500, 'internal server error');
  }
};
