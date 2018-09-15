import { validationResult } from 'express-validator';
import getValidationErrors from '../utils/getValidationErrors';
import { respondWithSuccess } from '../utils/responseUtil';

export default (req, res, next) => {
  const errors = getValidationErrors(validationResult(req).array());

  if (Object.keys(errors).length) {
    return respondWithSuccess(res, 400, 'Validation Error', errors);
  }

  return next();
};
