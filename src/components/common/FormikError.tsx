import { useFormik } from "formik";
import { FC } from "react";

interface Props {
  formik: ReturnType<typeof useFormik<any>>;
  name: string;
}

const FormikError: FC<Props> = ({ formik, name }) => {
  const error: any = formik.errors[name];
  return (
    formik.touched[name] &&
    formik.errors[name] && <span className="text-red-600">{error}</span>
  );
};

export default FormikError;
