import { respondWithSuccess, respondWithWarning } from '../utils/responseUtil';
import findUser from '../service/findUser';
import updateUser from '../service/updateUser';

export default async (req, res) => {
  const {
    params: { userId },
    body,
  } = req;

  try {
    const user = await findUser(userId);
    if (!user) {
      respondWithWarning(res, 200, 'user not found');
    }

    const updatedUser = await updateUser(userId, body);

    respondWithSuccess(res, 200, 'user updated', updatedUser);
  } catch (error) {
    respondWithWarning(res, 500, 'internal server error');
  }
};
