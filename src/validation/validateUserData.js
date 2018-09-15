import { body } from 'express-validator';

export default [
  body('firstName')
    .not()
    .isEmpty()
    .withMessage('firstName is required')
    .isAlpha()
    .withMessage('firstName should only contain alphabets'),
  body('lastName')
    .not()
    .isEmpty()
    .withMessage('lastName is required')
    .isAlpha()
    .withMessage('lastName should only contain alphabets'),
  body('dob')
    .not()
    .isEmpty()
    .withMessage('dob is required')
    .matches(/^\d{4}-\d{2}-\d{2}$/)
    // .custom(dob => { dob.trim().slice(0, 4) - })
    .withMessage('dob should be date 2200-05-29'),
  body('age')
    .not()
    .isEmpty()
    .withMessage('age is required')
    .isNumeric()
    .withMessage('age should only contain numbers'),
];
