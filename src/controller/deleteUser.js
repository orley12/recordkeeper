import { respondWithSuccess, respondWithWarning } from '../utils/responseUtil';
import findUser from '../service/findUser';
import deleteUser from '../service/deleteUser';

export default async (req, res) => {
  const { params: { userId } } = req;
  try {
    const user = await findUser(userId);
    if (!user) {
      respondWithWarning(res, 200, 'user not found');
    }

    const deletedUser = await deleteUser(userId);

    respondWithSuccess(res, 200, 'user deleted', deletedUser);
  } catch (error) {
    respondWithWarning(res, 500, 'internal server error');
  }
};
