import { useFormik } from "formik";
import { BiPlus } from "react-icons/bi";
import * as yup from "yup";
import FormikTextInput from "../../../components/common/FormikTextInput";
const AddTodo = () => {
  const test = useFormik({
    initialValues: {
      label: "",
    },
    validationSchema: yup
      .object()
      .shape({ label: yup.string().required("label is required filed !") }),
    onSubmit: (value) => {
      console.log(value);
    },
  });

  return (
    <form
      onSubmit={test.handleSubmit}
      onReset={test.handleReset}
      className="w-[95%] md:w-[60%] lg:w-[50%] 2xl:w-[30%] m-auto flex flex-row justify-between gap-1"
    >
      <FormikTextInput
        name="label"
        placeholder="test"
        className="w-full"
        formik={test}
        innerSymbol="Todo"
      />
      <button
        type="submit"
        className="btn btn-square max-sm:btn-sm btn-active btn-secondary"
      >
        <BiPlus className="text-2xl text-white p-0" />
      </button>
    </form>
  );
};

export default AddTodo;
