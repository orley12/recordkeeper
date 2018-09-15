import { param } from 'express-validator';

export default [
  param('userId')
    .not()
    .isEmpty()
    .withMessage('userId is required')
    .isNumeric()
    .withMessage('userId should only contain numbers "1"'),
];
