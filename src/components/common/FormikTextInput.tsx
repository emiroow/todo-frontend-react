import { useFormik } from "formik";
import { FC } from "react";
import FormikError from "./FormikError";
interface Props {
  formik: ReturnType<typeof useFormik<any>>;
  name: string;
  placeholder?: string;
  label?: string;
  innerIcon?: { position: "right" | "left"; icon: any };
  innerSymbol?: string;
  disable?: boolean;
  readOnly?: boolean;
  className?: string;
  required?: boolean;
  type?: "password" | "text";
  innerButton?: {
    onSubmit?: () => void;
    icon: any;
    type: "reset" | "submit";
    position: "right" | "left";
  };
  onExtraChange?: () => void;
}

const FormikTextInput: FC<Props> = ({
  disable,
  formik,
  innerIcon,
  innerSymbol,
  name,
  placeholder,
  innerButton,
  className,
  onExtraChange,
  readOnly,
  label,
  required = true,
  type,
}) => {
  return (
    // super compo 😎
    <div className="flex flex-col w-full">
      {label && (
        <span className="ml-1 font-medium">
          {label} {required && <span className="text-red-600">*</span>}
        </span>
      )}
      <label
        className={`input max-sm:input-sm input-secondary input-bordered flex items-center gap-2 ${className}`}
      >
        {/* inner btn  pos left*/}
        {innerButton && innerButton.position === "left" && (
          <button
            className="btn btn-sm btn-square btn-secondary"
            type={innerButton.type}
          >
            {innerButton.icon}
          </button>
        )}
        {/* inner icon  pos left*/}
        <>{innerIcon && innerIcon.position === "left" && innerIcon.icon}</>
        {/* innerSymbol */}
        {innerSymbol && !innerIcon && innerButton?.position !== "left" && (
          <>{innerSymbol}</>
        )}
        {/* input */}
        <input
          type={type}
          name={name}
          id={name}
          className="grow"
          onChange={(e) => {
            if (e.target.value) formik.setFieldValue(name, e.target.value);
            else formik.setFieldValue(name, "");
            onExtraChange?.();
          }}
          placeholder={placeholder}
          disabled={disable}
          readOnly={readOnly}
        />
        {/* inner btn  pos right*/}
        {innerButton && innerButton.position === "right" && (
          <button
            className="btn btn-sm btn-square btn-secondary"
            type={innerButton.type}
          >
            {innerButton.icon}
          </button>
        )}
        {/* inner icon  pos right*/}
        <>{innerIcon && innerIcon.position === "right" && innerIcon.icon}</>
      </label>
      <FormikError formik={formik} name={name} />
    </div>
  );
};

export default FormikTextInput;
