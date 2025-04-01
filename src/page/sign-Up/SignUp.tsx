import { Form, Formik } from "formik";
import * as yup from "yup";
import FormikControl from "./FormikComponents/FormikControl";
import { Link } from "react-router-dom";
import './main.css';



const initialvalues = {
    user_name: "",
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    password: "",
    confirm_password: "",
    auth_mode: "mobile",
    date: "",
  };
  
  const onSubmit = (values: typeof initialvalues) => {
    console.log(values);
    alert("ok");
  };
  
  const validationSchema = yup.object({
      email: yup.string().when("auth_mode", (auth_mode, schema) => {
        const mode = Array.isArray(auth_mode) ? auth_mode[0] : auth_mode;
        return mode === "email"
          ? schema.required("لطفا این قسمت را پر کنید").email("لطفا قالب ایمیل را رعایت کنید")
          : schema;
      }),
    
      mobile: yup.string().when("auth_mode", (auth_mode, schema) => {
        const mode = Array.isArray(auth_mode) ? auth_mode[0] : auth_mode;
        return mode === "mobile"
          ? schema.required("لطفا این قسمت را پر کنید")
          : schema;
      }),
  
    password: yup
      .string()
      .required("لطفا این قسمت را پر کنید")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
        "حداقل یک حرف بزرگ و یک حرف کوچک لاتین و اعداد و کاراکترهای خاص استفاده کنید"
      ),
  
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password"), ""], "با رمز عبور مطابقت ندارد")
      .required("لطفا این قسمت را پر کنید"),
  
    user_name: yup
      .string()
      .required("لطفا این قسمت را پر کنید")
      .matches(/^[0-9a-zA-Z]+$/, "فقط از حروف و اعداد لاتین استفاده کنید"),
  
    first_name: yup
      .string()
      .matches(
        /^[ابپتثجچهخدذرزسشصظطضعغفقک@-_.:گلمنوهیژئي\s0-9a-zA-Z]+$/,
        "فقط از حروف فارسی و لاتین و اعداد و @ : - _ . استفاده کنید"
      ),
  
    last_name: yup
      .string()
      .matches(
        /^[ابپتثجچهخدذرزسشصظطضعغفقک@-_.:گلمنوهیژئي\s0-9a-zA-Z]+$/,
        "فقط از حروف فارسی و لاتین و اعداد و @ : - _ . استفاده کنید"
      ),
  });
  

const authModeValues = [
  { id: "mobile", value: "موبایل" },
  { id: "email", value: "ایمیل" },
];

// const handleSetDate = (value) => {
//   console.log(value);
// };

const SignUp = () => {
  return (
    <div className="limiter">
      <div className="container-login100">
        <Formik
          initialValues={initialvalues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {(formik) => {
            console.log(formik);
            return (
              <div className="wrap-login100">
                <Form className="login100-form validate-form pos-relative d-flex flex-column align-items-center justify-content-center">
                  <span className="login100-form-title">ثبت نام اعضا</span>

                  <FormikControl
                    formik={formik}
                    control="input"
                    type="text"
                    name="user_name"
                    icon="fa fa-user"
                    label="نام کاربری"
                  />
                  <FormikControl
                    formik={formik}
                    control="input"
                    type="text"
                    name="first_name"
                    icon="fa fa-user"
                    label="نام"
                  />
                  <FormikControl
                    formik={formik}
                    control="input"
                    type="text"
                    name="last_name"
                    icon="fa fa-user"
                    label="نام خانوادگی"
                  />

                  <FormikControl
                    formik={formik}
                    control="radio"
                    name="auth_mode"
                    label="نوع اعتبارسنجی:"
                    options={authModeValues}
                  />
                  {formik.values.auth_mode == "mobile" ? (
                    <FormikControl
                      formik={formik}
                      control="input"
                      type="number"
                      name="mobile"
                      icon="fa fa-phone"
                      label="شماره موبایل"
                    />
                  ) : (
                    <FormikControl
                      formik={formik}
                      control="input"
                      type="email"
                      name="email"
                      icon="fa fa-envelope"
                      label="ایمیل"
                    />
                  )}

                  <FormikControl
                    formik={formik}
                    control="input"
                    type="password"
                    name="password"
                    icon="fa fa-lock"
                    label="رمز عبور"
                  />
                  <FormikControl
                    formik={formik}
                    control="input"
                    type="password"
                    name="confirm_password"
                    icon="fa fa-lock"
                    label=" تایید رمز عبور"
                  />
                  <FormikControl
                    formik={formik}
                    control="date"
                    name="date"
                    icon="fa fa-calendar"
                    label=" تاریخ تولد"
                  />

                  <div className="container-login100-form-btn">
                    <button className="login100-form-btn mb-4">ثبت نام</button>
                  </div>
                  <div className="text-center p-t-12 p-b-45">
                    <Link className="txt2" to={'/login'}>
                      قبلا ثبت نام کرده ام
                      <i
                        className="fa fa-long-arrow-left m-l-5 p-r-10 pe-2"
                        aria-hidden="true"
                      ></i>
                    </Link>
                  </div>
                </Form>
                <div className="login100-pic js-tilt" data-tilt>
                  <img src="/Images/img-01.png" alt="IMG" />
                </div>
              </div>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default SignUp;
