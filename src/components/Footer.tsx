import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-light pt-5 pb-5 mx-2">
      <div className="container">
        <div className="row ps-1">
          <div className="col-md-4">
            <h4 className="fw-bold mb-2">درباره لرن کد</h4>
            <p className="text-muted mb-4">
              لرن کد یکی از پرتلاش‌ترین و بروزترین وبسایت های آموزشی در سطح
              ایران است که همیشه تلاش کرده تا بتواند جدیدترین و بروزترین مقالات
              و دوره‌های آموزشی را در اختیار علاقه‌مندان ایرانی قرار دهد. تبدیل
              کردن برنامه نویسان ایرانی به بهترین برنامه نویسان جهان هدف ماست.
            </p>
          </div>
          <div className="col-md-7 offset-md-1">
            <div className="row">
              <div className="col-md-4">
                <h6 className="fw-bold footer-header w-75 mb-2">بخش های وبسایت</h6>
                <ul className="text-primary">
                  <li>
                    <Link className="footer-link" to="#">
                      قوانین و مقررات
                    </Link>
                  </li>
                  <li className="my-2">
                    <Link className="footer-link" to="#لرن کد نامه">
                    </Link>
                  </li>
                  <li>
                    <Link className="footer-link" to="#">
                      مدرسان لرن کد
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link className="footer-link" to="#">
                      درباره ما
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link className="footer-link" to="#">
                      ارتباط با ما
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <h6 className="fw-bold footer-header w-75 mb-2">
                  محبوب‌ترین آموزش‌ها
                </h6>
                <ul className="text-primary">
                  <li>
                    <Link className="footer-link" to="#">
                      آموزش جاوا اسکریپت
                    </Link>
                  </li>
                  <li className="my-2">
                    <Link className="footer-link" to="#">
                      آموزش لاراول
                    </Link>
                  </li>
                  <li>
                    <Link className="footer-link" to="#">
                      آموزش پایتون
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link className="footer-link" to="#">
                      آموزش react
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <h6 className="fw-bold footer-header w-75 mb-2">ارتباط با ما</h6>
                <ul className="list-unstyled text-muted">
                  <li className="d-flex items-center justify-content-evenly">
                    <span className="pt-1 pe-1">
                      <svg
                        className="dark:text-blue-950 text-blue-980 absolute -top-1 -left-2"
                        width="17"
                        height="15"
                        viewBox="0 0 17 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.5632 4.17184C15.4183 3.54105 15.2294 3.0782 15.0064 2.72729C14.2794 3.41662 13.3594 4.25301 12.3603 4.98727C10.9828 5.99965 9.61574 6.69415 8.50008 6.69415C7.38443 6.69415 6.01733 5.99965 4.63986 4.98727C3.64079 4.25301 2.72075 3.41662 1.99377 2.72729C1.77081 3.0782 1.58187 3.54105 1.437 4.17184C1.43013 4.20176 1.42338 4.23196 1.41675 4.26247C2.07618 4.86961 2.86033 5.55149 3.70121 6.1695C5.10702 7.2027 6.83246 8.18184 8.50008 8.18184C10.1677 8.18184 11.8931 7.2027 13.299 6.1695C14.1398 5.55149 14.924 4.86961 15.5834 4.26246C15.5768 4.23196 15.57 4.20176 15.5632 4.17184Z"
                          fill="currentColor"
                        ></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0 7.5C0 13.6762 1.50025 15 8.5 15C15.4997 15 17 13.6762 17 7.5C17 1.32375 15.4997 0 8.5 0C1.50025 0 0 1.32375 0 7.5ZM8.5 13.75C6.7824 13.75 5.49884 13.6672 4.5262 13.4764C3.56964 13.2889 3.0028 13.0139 2.62683 12.6822C2.25086 12.3505 1.9393 11.8503 1.72671 11.0063C1.51055 10.1481 1.41667 9.01553 1.41667 7.5C1.41667 5.98447 1.51055 4.85192 1.72671 3.99371C1.9393 3.14968 2.25086 2.64953 2.62683 2.31779C3.0028 1.98605 3.56964 1.71115 4.5262 1.52357C5.49884 1.33284 6.7824 1.25 8.5 1.25C10.2176 1.25 11.5012 1.33284 12.4738 1.52357C13.4304 1.71115 13.9972 1.98605 14.3732 2.31779C14.7491 2.64953 15.0607 3.14968 15.2733 3.99371C15.4895 4.85192 15.5833 5.98447 15.5833 7.5C15.5833 9.01553 15.4895 10.1481 15.2733 11.0063C15.0607 11.8503 14.7491 12.3505 14.3732 12.6822C13.9972 13.0139 13.4304 13.2889 12.4738 13.4764C11.5012 13.6672 10.2176 13.75 8.5 13.75Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      <Link className="footer-link me-2" to="/">
                        ایمیل:
                      </Link>
                    </span>
                    <Link className="pt-1" to="#">
                      info@LearnCode
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
