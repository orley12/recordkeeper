import findUser from '../service/findUser';
import { respondWithWarning, respondWithSuccess } from '../utils/responseUtil';
import updateProfile from '../service/updateProfile';

export default async (req, res) => {
  const {
    params: { userId },
    body,
  } = req;

  try {
    const user = await findUser(userId);
    if (!user) {
      return respondWithWarning(res, 200, 'user not found');
    }

    const profile = await updateProfile(userId, body);
    return respondWithSuccess(res, 200, 'profile updated', profile);
  } catch (error) {
    return respondWithWarning(res, 500, 'internal server error');
  }
};
