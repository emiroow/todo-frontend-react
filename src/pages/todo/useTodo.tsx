import { useFormik } from "formik";

const useTodo = () => {
  const todoFormik = useFormik({
    initialValues: {
      subject: "",
    },
    onSubmit: (value) => {
      console.log(value);
    },
  });

  return { todoFormik };
};

export default useTodo;
