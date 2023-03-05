import Joi from 'joi';
import { validate } from 'express-validation';

export const getRoot = validate({
  query: Joi.object({
    types: Joi.array().items(Joi.string()),
    nations: Joi.array().items(Joi.string()),
    offset: Joi.string(),
    limit: Joi.string(),
    minLevel: Joi.string(),
    maxLevel: Joi.string(),
    name: Joi.string().allow(''),
  })
});
