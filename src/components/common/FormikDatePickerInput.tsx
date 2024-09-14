import { useFormik } from "formik";
import { FC } from "react";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DatePicker from "react-multi-date-picker";
import "react-multi-date-picker/styles/backgrounds/bg-dark.css";
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

const FormikDatePickerInput: FC<Props> = ({
  disable,
  label,
  placeholder,
  readOnly,
  className,
  name,
  formik,
  onExtraChange,
  required,
}) => {
  function CustomInput({ onFocus, value, onChange }: any) {
    return (
      <>
        {label && (
          <span className="ml-1 font-medium">
            {label} {required && <span className="text-red-600">*</span>}
          </span>
        )}
        <label
          className={`input max-sm:input-sm input-secondary input-bordered flex items-center gap-2 ${className}`}
        >
          <input
            onFocus={onFocus}
            value={value}
            onChange={onChange}
            className="grow "
            name={name}
            id={name}
            placeholder={placeholder ?? `${label} را وارد کنید`}
            disabled={disable}
            readOnly={readOnly}
          />
        </label>
      </>
    );
  }

  return (
    <div className="flex flex-col w-full">
      <DatePicker
        render={<CustomInput />}
        calendar={persian}
        locale={persian_fa}
        className="bg-dark"
        calendarPosition="bottom-left"
        onChange={(selectedDate) => {
          if (selectedDate) {
            const options: any = {
              timeZone: "Asia/Tehran",
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
              fractionalSecondDigits: 3,
              hour12: false,
            };
            const formatter = new Intl.DateTimeFormat("en-GB", options);
            const parts = formatter.formatToParts(selectedDate.toDate());
            const year = parts.find((p: any) => p.type === "year")?.value;
            const month = parts.find((p: any) => p.type === "month")?.value;
            const day = parts.find((p: any) => p.type === "day")?.value;
            const hour = parts.find((p: any) => p.type === "hour")?.value;
            const minute = parts.find((p: any) => p.type === "minute")?.value;
            const second = parts.find((p: any) => p.type === "second")?.value;
            const fractionalSecond =
              parts.find((p: any) => p.type === "fractionalSecond")?.value ||
              "000";
            const tehranTime = `${year}-${month}-${day}T${hour}:${minute}:${second}.${fractionalSecond}`;
            formik.setFieldValue(
              name,
              selectedDate?.isValid ? `${tehranTime}Z` : ""
            );
          } else {
            formik.setFieldValue(name, "");
          }
          onExtraChange?.();
        }}
      />
      <FormikError formik={formik} name={name} />
    </div>
  );
};

export default FormikDatePickerInput;
