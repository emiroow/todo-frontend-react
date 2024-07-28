import { useFormik } from "formik";
import { FaKey, FaUserTie } from "react-icons/fa";
import { Link } from "react-router-dom";
import * as yup from "yup";
import FormikTextInput from "../../components/common/FormikTextInput";

const Login = () => {
  const loginFormik = useFormik({
    initialValues: {
      user: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      user: yup.string().required("user is required filed !"),
      password: yup.number().required("password is required filed !"),
    }),
    onSubmit: (value) => {
      console.log(value);
    },
  });

  return (
    // container
    <div className="w-full flex-col h-[100vh] flex justify-center items-center">
      {/* box */}
      <p className="mb-5 font-bold text-2xl">Login</p>
      <form
        onSubmit={loginFormik.handleSubmit}
        onReset={loginFormik.handleReset}
        className="w-[95%] md:w-[35%] lg:w-[25%] 2xl:w-[20%] flex flex-col gap-3 justify-center p-6 drop-shadow-2xl shadow-2xl bg-neutral rounded-lg"
      >
        <FormikTextInput
          formik={loginFormik}
          name="user"
          label="User"
          placeholder="Enter your User"
          innerIcon={{ icon: <FaUserTie />, position: "left" }}
        />
        <FormikTextInput
          formik={loginFormik}
          name="password"
          label="Password"
          placeholder="Enter your Password"
          innerIcon={{ icon: <FaKey />, position: "left" }}
        />
        <button
          type="submit"
          className="btn btn-secondary max-lg:btn-sm text-md"
        >
          Login
        </button>
        <Link
          to={"/auth/signup"}
          className="text-sm text-info text-center underline link-hover"
        >
          Create Account
        </Link>
      </form>
    </div>
  );
};

export default Login;
