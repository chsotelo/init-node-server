import Joi from "joi";

export const exampleShema = Joi.object({
  name: Joi.string().max(100).required(),
});
