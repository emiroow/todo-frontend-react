import { useFormik } from "formik";
import { FC } from "react";
import { IoClose } from "react-icons/io5";
import FormikError from "./FormikError";

interface Props {
  formik: ReturnType<typeof useFormik<any>>;
  name: string;
  placeholder?: string;
  label?: string;
  disable?: boolean;
  className?: string;
  required?: boolean;
  onExtraChange?: (e: any) => void;
  options: { label: string; value: any; disabled?: boolean }[];
  disableRemoveBtn?: boolean;
}
const FormikSelectInput: FC<Props> = ({
  formik,
  disable,
  name,
  className,
  label,
  options,
  placeholder,
  required,
  onExtraChange,
  disableRemoveBtn = false,
}) => {
  return (
    <>
      <label className={`form-control ${className} relative`}>
        {label && (
          <span className="ml-1 font-medium">
            {label} {required && <span className="text-red-600">*</span>}
          </span>
        )}
        {formik.values[name] && disableRemoveBtn && (
          <IoClose
            onClick={() => {
              formik.setFieldValue(name, "");
            }}
            className="text-red-600 cursor-pointer text-xl absolute top-10 left-10 hover:shadow-xl hover:drop-shadow-2xl shadow-red-600 z-50"
          />
        )}

        <select
          disabled={disable}
          onChange={(e) => {
            if (e.target.value) formik.setFieldValue(name, e.target.value);
            else formik.setFieldValue(name, "");
            onExtraChange && onExtraChange?.(e);
          }}
          onKeyDown={(event) => {
            if (event.code === "Backspace") {
              formik.setFieldValue(name, "");
            }
          }}
          value={formik.values[name] || ""}
          className={`w-full select select-bordered select-secondary text-center p-0`}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((item, index) => {
            return (
              <option key={index} value={item.value}>
                {item.label}
              </option>
            );
          })}
        </select>
      </label>
      <FormikError formik={formik} name={name} />
    </>
  );
};

export default FormikSelectInput;
