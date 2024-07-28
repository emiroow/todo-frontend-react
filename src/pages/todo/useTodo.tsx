import { useFormik } from "formik";
import * as yup from "yup";

const useTodo = () => {
  const todoFormik = useFormik({
    initialValues: {
      subject: "",
    },
    validationSchema: yup
      .object()
      .shape({ label: yup.string().required("label is required filed !") }),
    onSubmit: (value) => {
      console.log(value);
    },
  });

  return { todoFormik };
};

export default useTodo;
