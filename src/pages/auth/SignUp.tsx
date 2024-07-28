import { useFormik } from "formik";
import { FaKey, FaUserTie } from "react-icons/fa";
import { Link } from "react-router-dom";
import * as yup from "yup";
import FormikTextInput from "../../components/common/FormikTextInput";

const SignUp = () => {
  const signUpFormik = useFormik({
    initialValues: {
      user: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: yup.object().shape({
      user: yup.string().required("user is required filed !"),
      password: yup.number().required("password is required filed !"),
      confirmPassword: yup
        .number()
        .required("confirm password is required filed !")
        .oneOf([yup.ref("password")], "Passwords must match"),
    }),
    onSubmit: (value) => {
      console.log(value);
    },
  });

  return (
    // container
    <div className="w-full flex-col h-[100vh] flex justify-center items-center">
      {/* box */}
      <p className="mb-5 font-bold text-2xl">SignUp</p>
      <form
        onSubmit={signUpFormik.handleSubmit}
        onReset={signUpFormik.handleReset}
        className="w-[95%] md:w-[35%] lg:w-[25%] 2xl:w-[20%] flex flex-col gap-3 justify-center p-6 drop-shadow-2xl shadow-2xl bg-neutral rounded-lg"
      >
        <FormikTextInput
          formik={signUpFormik}
          name="user"
          label="User"
          placeholder="Enter your User"
          innerIcon={{ icon: <FaUserTie />, position: "left" }}
        />
        <FormikTextInput
          formik={signUpFormik}
          name="password"
          label="Password"
          placeholder="Enter your Password"
          innerIcon={{ icon: <FaKey />, position: "left" }}
        />
        <FormikTextInput
          formik={signUpFormik}
          name="confirmPassword"
          label="Confirm Password"
          placeholder="Enter your Confirm Password"
          innerIcon={{ icon: <FaKey />, position: "left" }}
        />
        <button
          type="submit"
          className="btn btn-secondary max-lg:btn-sm text-md"
        >
          Create
        </button>
        <Link
          to={"/auth/login"}
          className="text-sm text-info text-center underline link-hover"
        >
          Login Account
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
