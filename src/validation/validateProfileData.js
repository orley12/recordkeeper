import { body } from 'express-validator';

export default [
  body('height')
    .not()
    .isEmpty()
    .withMessage('height is required')
    .isAlphanumeric()
    .withMessage('age should only contain alphaNumeric "6.2ft"'),
  body('hairColor')
    .not()
    .isEmpty()
    .withMessage('hairColor is required')
    .isAlpha()
    .withMessage('hairColor should only contain alphabets "black"'),
  body('weight')
    .not()
    .isEmpty()
    .withMessage('weight is required')
    .isAlphanumeric()
    .withMessage('weight should only contain alphaNumeric "weight"'),
];
