import { FastField } from "formik";

const Input = (props: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formik: any;
  type: string;
  name: string;
  icon?: string;
  label?: string;
}) => {
  return (
    <div className="Login">
      <div
        className={`wrap-input100 validate-input ${props.formik.errors[props.name] && props.formik.touched[props.name] ? "alert-validate" : ""}`}
        data-validate={props.formik.errors[props.name]}
      >
        <FastField
          className="input100"
          type={props.type}
          name={props.name}
          placeholder={props.label}
        />
        <span className="focus-input100"></span>
        <span className="symbol-input100">
          <i className={props.icon}></i>
        </span>
      </div>
    </div>
  );
};

export default Input;
