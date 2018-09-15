import { respondWithSuccess, respondWithWarning } from '../utils/responseUtil';
import createProfile from '../service/createProfile';
import findUser from '../service/findUser';

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

    const profile = await createProfile(user, body);
    return respondWithSuccess(res, 201, 'profile created', profile.toJSON());
  } catch (error) {
    return respondWithWarning(res, 500, 'internal server error');
  }
};
