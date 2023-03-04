import Joi from 'joi';

export const HelloScheme = {
    name: () => Joi.string(),
};
