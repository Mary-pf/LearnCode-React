/* eslint-disable @typescript-eslint/no-explicit-any */
import { FastField } from "formik";

interface InputProps {
  formik: {
    errors: Record<string, any>;
    touched: Record<string, any>;
  };
  type: string;
  name: string;
  icon: string;
  label: string;
}

const Input = ({ formik, type, name, icon, label }: InputProps) => {
  return (
    <div
      className={`wrap-input100 validate-input ${formik.errors[name] && formik.touched[name] ? "alert-validate" : ""}`}
      data-validate={formik.errors[name]}
    >
      <FastField className="input100" type={type} name={name} placeholder={label} />
      <span className="focus-input100"></span>
      <span className="symbol-input100">
        <i className={icon}></i>
      </span>
    </div>
  );
};

export default Input;
