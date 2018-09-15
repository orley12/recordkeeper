import findUser from '../service/findUser';
import { respondWithWarning, respondWithSuccess } from '../utils/responseUtil';
import deleteProfile from '../service/deleteProfile';

export default async (req, res) => {
  const {
    params: { userId },
  } = req;

  try {
    const user = await findUser(userId);

    if (!user) {
      respondWithWarning(res, 200, 'user not found');
    }

    const profile = await deleteProfile(userId);
    respondWithSuccess(res, 200, 'profile deleted', profile);
  } catch (error) {
    console.log(error);

    respondWithWarning(res, 500, 'internal server error');
  }
};
