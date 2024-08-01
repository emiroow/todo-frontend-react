import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import Joi from "joi";
import { FaKey, FaUserTie } from "react-icons/fa";
import { Link } from "react-router-dom";
import FormikTextInput from "../../components/common/FormikTextInput";
import { apiService } from "../../service/axiosService";
import { validateSchema } from "../../utils/common/joiValidator";

const Login = () => {
  const schema = Joi.object({
    user: Joi.string().min(4).required().messages({
      "any.required": "user is required felid",
      "string.base": "user most be string",
      "string.empty": "user cannot be an empty field",
      "string.min": "user should have a minimum length of 4",
    }),
    password: Joi.string()
      .min(8)
      .max(30)
      .pattern(new RegExp("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]+$"))
      .required()
      .messages({
        "any.required": "password is required felid",
        "string.pattern.base":
          "password must contain at least one letter and one number",
        "string.base": "password most be string",
        "string.empty": "password cannot be an empty field",
        "string.min": "password should have a minimum length of 8",
        "string.max": "password should have a minimum length of 30",
      }),
  });

  const loginFormik = useFormik({
    initialValues: {
      user: "",
      password: "",
    },
    validate: (value) => validateSchema(schema, value),
    onSubmit: (value) => {
      loginMutation.mutate(value);
    },
  });

  const login = async (loginData: { user: string; password: string }) => {
    const data = await apiService({
      method: "POST",
      path: "auth/login",
      Option: { data: loginData },
    });
    return data;
  };

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      console.log(data);
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
