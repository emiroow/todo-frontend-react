import { validateSchema } from "@/utils/common/joiValidator";
import { useFormik } from "formik";
import Joi from "joi";
import { FaKey, FaUserTie } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { Link } from "react-router-dom";
import FormikTextInput from "../../components/common/FormikTextInput";

const SignUp = () => {
  const schema = Joi.object({
    fullName: Joi.string().required().min(5).max(20).messages({
      "any.required": "{{#label}} is required felid",
      "string.base": "{{#label}} most be string",
      "string.empty": "{{#label}} cannot be an empty field",
      "string.min": "{{#label}} should have a minimum length of 5",
      "string.max": "{{#label}} should have a minimum length of 20",
    }),
    email: Joi.string().required().min(5).max(30).messages({
      "any.required": "{{#label}} is required felid",
      "string.base": "{{#label}} most be string",
      "string.empty": "{{#label}} cannot be an empty field",
      "string.min": "{{#label}} should have a minimum length of 5",
      "string.max": "{{#label}} should have a minimum length of 30",
    }),
    user: Joi.string().min(4).required().messages({
      "any.required": "{{#label}} is required felid",
      "string.base": "{{#label}} most be string",
      "string.empty": "{{#label}} cannot be an empty field",
      "string.min": "{{#label}} should have a minimum length of 4",
    }),
    password: Joi.string()
      .min(8)
      .max(30)
      .pattern(new RegExp("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]+$"))
      .required()
      .messages({
        "any.required": "{{#label}} is required felid",
        "string.pattern.base":
          "{{#label}} must contain at least one letter and one number",
        "string.base": "{{#label}} most be string",
        "string.empty": "{{#label}} cannot be an empty field",
        "string.min": "{{#label}} should have a minimum length of 8",
        "string.max": "{{#label}} should have a minimum length of 30",
      }),
    confirmPassword: Joi.any()
      .required()
      .equal(Joi.ref("password"))
      .messages({ "any.only": "{{#label}} does not match" }),
  });

  const signUpFormik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      user: "",
      password: "",
      confirmPassword: "",
    },
    validate: (values) => validateSchema(schema, values),
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
          name="fullName"
          label="Full Name"
          placeholder="Enter your Full Name"
          innerIcon={{ icon: <FaUserTie />, position: "left" }}
        />
        <FormikTextInput
          formik={signUpFormik}
          name="email"
          label="Email"
          placeholder="Enter your Email"
          innerIcon={{ icon: <LuMail />, position: "left" }}
        />
        <FormikTextInput
          formik={signUpFormik}
          name="user"
          label="User"
          placeholder="Enter your User"
          innerIcon={{ icon: <LuMail />, position: "left" }}
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
