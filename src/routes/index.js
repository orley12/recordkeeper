import validateUserData from '../validation/validateUserData';
import validateProfileData from '../validation/validateProfileData';
import createUser from '../controller/createUser';
import createProfile from '../controller/createProfile';
import getUsers from '../controller/getUsers';
import validateUserId from '../validation/validateUserId';
import getUser from '../controller/getUser';
import updateUser from '../controller/updateUser';
import deleteUser from '../controller/deleteUser';
import validationMiddleware from '../middleware/validationMiddleware';
import deleteProfile from '../controller/deleteProfile';
import validateUpdateProfileData from '../validation/validateUpdateProfileData';
import updateProfile from '../controller/updateProfile';

export default (router) => {
  router.post('/api/v1/users',
    validateUserData,
    validationMiddleware,
    createUser);

  router.get('/api/v1/users', getUsers);

  router.get('/api/v1/users/:userId',
    validateUserId,
    validationMiddleware,
    getUser);

  router.patch('/api/v1/users/:userId',
    validateUserId,
    validationMiddleware,
    updateUser);

  router.delete('/api/v1/users/:userId',
    validateUserId,
    validationMiddleware,
    deleteUser);

  router.post('/api/v1/user-profile/:userId',
    validateProfileData,
    validationMiddleware,
    createProfile);

  router.delete('/api/v1/user-profile/:userId',
    validateUserId,
    validationMiddleware,
    deleteProfile);

  router.patch('/api/v1/user-profile/:userId',
    validateUserId,
    validateUpdateProfileData,
    validationMiddleware,
    updateProfile);
};
