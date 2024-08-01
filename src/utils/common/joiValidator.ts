import { FormikErrors } from "formik";
import Joi, { ValidationResult } from "joi";

export const validateSchema = (
  schema: Joi.ObjectSchema,
  values: any
): FormikErrors<any> => {
  const { error }: ValidationResult = schema.validate(values, {
    abortEarly: false,
  });
  if (!error) return {};

  const errors: FormikErrors<any> = {};
  for (const detail of error.details) {
    const path: any = detail.path[0];
    errors[path] = detail.message;
  }
  return errors;
};
