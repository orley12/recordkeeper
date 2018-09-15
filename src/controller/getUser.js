import { respondWithWarning, respondWithSuccess } from '../utils/responseUtil';
import findUser from '../service/findUser';

export default async (req, res) => {
  const { params: { userId } } = req;
  try {
    const user = await findUser(userId);
    if (!user) {
      respondWithWarning(res, 200, 'user not found');
    }

    respondWithSuccess(res, 200, 'user found', user.toJSON());
  } catch (error) {
    console.log(error);

    respondWithWarning(res, 500, 'internal server error');
  }
};
