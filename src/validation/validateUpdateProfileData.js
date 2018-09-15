import { body } from 'express-validator';

export default [
  body('height')
    .optional()
    .isAlphanumeric()
    .withMessage('age should only contain alphaNumeric "6ft"'),
  body('hairColor')
    .optional()
    .isAlpha()
    .withMessage('hairClr should only contain alphabets "black"'),
  body('weight')
    .optional()
    .isAlphanumeric()
    .withMessage('weight should only contain alphaNumeric "10kg"'),
];
