import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Button,
  Form,
  NavDropdown,
} from "react-bootstrap";
import { FaSearch, FaSun, FaMoon } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";

const CustomNavbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <>
      {/* نوار بالا (سفید) */}
      <Navbar
        expand="lg"
        className={`top-navbar ${darkMode ? "dark-mode" : "light-mode"}`}
      >
        <Container>
          <Navbar.Brand
            href="#"
            className={darkMode ? "text-light" : "text-dark"}
          >
            LernCode
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="d-flex align-items-center ms-auto search-container">
              <Button
                variant="link"
                className={darkMode ? "text-light" : "text-dark"}
                onClick={() => setShowSearch(!showSearch)}
                style={{ padding: "5px" }}
              >
                <FaSearch />
              </Button>
              {showSearch && (
                <div className="search-box">
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="جستجو کنید..."
                      className="me-1"
                      style={{
                        borderRadius: "10px",
                        fontSize: "1.1rem",
                        padding: "6px",
                      }}
                    />
                  </Form>
                </div>
              )}
            </div>
            <Button
              variant="primary"
              className="mx-2"
              onClick={() => navigate("/login")}
            >
              ورود
            </Button>
            <Button
              variant="outline-primary"
              onClick={() => navigate("/signUp")}
            >
              عضویت
            </Button>
            <Button
              variant="link"
              className={darkMode ? "text-light" : "text-dark"}
              onClick={toggleDarkMode}
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* نوار پایین (توسی) */}
      <Navbar
        expand="lg"
        className={`bottom-navbar narrow-navbar ${darkMode ? "dark-mode" : "bg-secondary text-light"}`}
      >
        <Container>
          <Navbar.Toggle aria-controls="bottom-navbar-nav" />
          <Navbar.Collapse id="bottom-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#" className="text-light">
                لرن کد
              </Nav.Link>

              <NavDropdown
                title={<span className="text-light">دوره های آموزشی</span>}
                id="courses-dropdown"
                className="custom-dropdown text-light"
              >
                <NavDropdown.Item
                  as="li"
                  className="dropdown-menu bg-white rounded-3"
                  style={{ width: "200rem" }}
                >
                  <div className="grid grid-cols-12 gap-2 ps-4 grid-menu">
                    <div className="col-12 lg:col-span-6 pt-5">
                      <Link
                        to=""
                        className="inline-flex items-start text-decoration-none"
                      >
                        <div className="ml-2">
                          <svg
                            width="25"
                            height="23"
                            viewBox="0 0 25 23"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              opacity="0.15"
                              cx="15.8062"
                              cy="13.2944"
                              r="9.19385"
                              fill="#3B82F6"
                            ></circle>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M16.3214 2.11028C13.881 0.791546 12.2987 2.02656e-06 10.6634 0C9.02798 0 7.44568 0.791542 5.0053 2.11028L4.96149 2.13395L4.96148 2.13395C3.75491 2.78594 2.79516 3.30457 2.14113 3.74635C1.80989 3.97009 1.51103 4.20394 1.28922 4.45865C1.06485 4.7163 0.863281 5.06072 0.863281 5.48803V11.7601C0.863281 12.1931 1.21429 12.5441 1.64729 12.5441C2.08028 12.5441 2.43129 12.1931 2.43129 11.7601V7.41846C2.86981 7.69436 3.41342 8.00017 4.04977 8.34777C3.9992 8.97843 3.99926 9.79355 3.99934 10.8457L3.99935 10.9761C3.99935 14.8961 5.1708 15.6801 10.6364 15.6801C15.7594 15.6801 17.3274 14.8962 17.3274 10.9761C17.3274 9.86231 17.3274 9.00684 17.2715 8.35074C18.0591 7.92059 18.7049 7.5544 19.1856 7.22971C19.5168 7.00597 19.8156 6.77212 20.0375 6.51741C20.2618 6.25976 20.4634 5.91534 20.4634 5.48803C20.4634 5.06072 20.2618 4.7163 20.0375 4.45865C19.8156 4.20394 19.5168 3.97009 19.1856 3.74634C18.5315 3.30456 17.5718 2.78595 16.3652 2.13396L16.3214 2.11028ZM15.7452 9.17551C13.6245 10.3075 12.1664 10.9761 10.6634 10.9761C9.15979 10.9761 7.70108 10.307 5.5791 9.17422C5.56756 9.64289 5.56736 10.2286 5.56736 10.9761C5.56736 12.9088 5.89203 13.32 6.1699 13.5153C6.37815 13.6616 6.76763 13.8294 7.53133 13.9465C8.28954 14.0628 9.2921 14.1121 10.6364 14.1121C11.8908 14.1121 12.8546 14.0632 13.6025 13.947C14.3541 13.8302 14.7819 13.6605 15.0352 13.4922C15.3855 13.2595 15.7594 12.796 15.7594 10.9761C15.7594 10.2283 15.7582 9.643 15.7452 9.17551ZM3.01881 5.0457C2.72862 5.24172 2.56119 5.38576 2.47202 5.48803C2.56119 5.5903 2.72862 5.73434 3.01881 5.93036C3.60046 6.32325 4.49075 6.80543 5.75074 7.48631C8.28467 8.85559 9.50055 9.40805 10.6634 9.40805C11.8262 9.40805 13.042 8.85559 15.5759 7.48631C16.8359 6.80543 17.7262 6.32325 18.3079 5.93036C18.5981 5.73434 18.7655 5.5903 18.8547 5.48803C18.7655 5.38576 18.5981 5.24172 18.3079 5.0457C17.7262 4.65281 16.8359 4.17063 15.576 3.48976C13.042 2.12047 11.8262 1.56801 10.6634 1.56801C9.50055 1.56801 8.28467 2.12047 5.75074 3.48976C4.49075 4.17063 3.60046 4.65281 3.01881 5.0457ZM18.9077 5.55975L18.9067 5.55765C18.9074 5.55906 18.9077 5.55976 18.9077 5.55975ZM18.9077 5.4163L18.9067 5.41838C18.9071 5.41764 18.9073 5.4171 18.9075 5.41676C18.9076 5.41645 18.9077 5.4163 18.9077 5.4163ZM2.42001 5.41841C2.41927 5.417 2.41898 5.4163 2.41902 5.41631L2.42001 5.41841Z"
                              fill="#3B82F6"
                            ></path>
                          </svg>
                        </div>
                        <div>
                          <h6 className="text-dark">دوره‌های آموزشی</h6>
                          <span
                            className="text-muted"
                            style={{ fontSize: "11px" }}
                          >
                            لیست دوره‌های آموزشی ویدیویی
                          </span>
                        </div>
                      </Link>
                    </div>

                    <div className="col-12 lg:col-span-6 pt-5 pe-2">
                      <Link
                        to=""
                        className="inline-flex items-start text-decoration-none"
                      >
                        <div className="ml-2">
                          <svg
                            width="22"
                            height="23"
                            viewBox="0 0 22 23"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              opacity="0.15"
                              cx="12.8062"
                              cy="13.2944"
                              r="9.19385"
                              fill="#E81C4D"
                            ></circle>
                            <path
                              d="M0.785 3.66683C0.785 4.40379 0.825512 4.94242 0.914603 5.34329C1.00171 5.73525 1.12449 5.94578 1.2561 6.0774C1.38771 6.20901 1.59824 6.33178 1.9902 6.41889C2.39108 6.50798 2.92971 6.5485 3.66667 6.5485C4.40363 6.5485 4.94226 6.50798 5.34313 6.41889C5.73509 6.33178 5.94562 6.20901 6.07723 6.0774C6.20885 5.94578 6.33162 5.73525 6.41873 5.34329C6.50782 4.94242 6.54833 4.40379 6.54833 3.66683C6.54833 2.92987 6.50782 2.39124 6.41873 1.99037C6.33162 1.59841 6.20885 1.38788 6.07723 1.25626C5.94562 1.12465 5.73509 1.00188 5.34313 0.914766C4.94226 0.825675 4.40363 0.785163 3.66667 0.785163C2.92971 0.785163 2.39108 0.825675 1.9902 0.914766C1.59824 1.00188 1.38771 1.12465 1.2561 1.25626C1.12449 1.38788 1.00171 1.59841 0.914603 1.99037C0.825512 2.39124 0.785 2.92987 0.785 3.66683Z"
                              stroke="#E81C4D"
                              stroke-width="1.57"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M0.785 12.3333C0.785 13.0703 0.825512 13.6089 0.914603 14.0098C1.00171 14.4018 1.12449 14.6123 1.2561 14.7439C1.38771 14.8755 1.59824 14.9983 1.9902 15.0854C2.39108 15.1745 2.92971 15.215 3.66667 15.215C4.40363 15.215 4.94226 15.1745 5.34313 15.0854C5.73509 14.9983 5.94562 14.8755 6.07723 14.7439C6.20885 14.6123 6.33162 14.4018 6.41873 14.0098C6.50782 13.6089 6.54833 13.0703 6.54833 12.3333C6.54833 11.5964 6.50782 11.0577 6.41873 10.6569C6.33162 10.2649 6.20885 10.0544 6.07723 9.92277C5.94562 9.79115 5.73509 9.66838 5.34313 9.58127C4.94226 9.49218 4.40363 9.45167 3.66667 9.45167C2.92971 9.45167 2.39108 9.49218 1.9902 9.58127C1.59824 9.66838 1.38771 9.79115 1.2561 9.92277C1.12449 10.0544 1.00171 10.2649 0.914603 10.6569C0.825512 11.0577 0.785 11.5964 0.785 12.3333Z"
                              stroke="#E81C4D"
                              stroke-width="1.57"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M9.45163 12.3333C9.45163 13.0703 9.49214 13.6089 9.58123 14.0098C9.66834 14.4018 9.79111 14.6123 9.92273 14.7439C10.0543 14.8755 10.2649 14.9983 10.6568 15.0854C11.0577 15.1745 11.5963 15.215 12.3333 15.215C13.0702 15.215 13.6089 15.1745 14.0098 15.0854C14.4017 14.9983 14.6122 14.8755 14.7439 14.7439C14.8755 14.6123 14.9982 14.4018 15.0854 14.0098C15.1744 13.6089 15.215 13.0703 15.215 12.3333C15.215 11.5964 15.1744 11.0577 15.0854 10.6569C14.9982 10.2649 14.8755 10.0544 14.7439 9.92277C14.6122 9.79115 14.4017 9.66838 14.0098 9.58127C13.6089 9.49218 13.0702 9.45167 12.3333 9.45167C11.5963 9.45167 11.0577 9.49218 10.6568 9.58127C10.2649 9.66838 10.0543 9.79115 9.92273 9.92277C9.79111 10.0544 9.66834 10.2649 9.58123 10.6569C9.49214 11.0577 9.45163 11.5964 9.45163 12.3333Z"
                              stroke="#E81C4D"
                              stroke-width="1.57"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M12.3333 1.3335V3.66683M12.3333 6.00016V3.66683M12.3333 3.66683H14.6667H10"
                              stroke="#E81C4D"
                              stroke-width="1.57"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </div>
                        <div>
                          <h6 className="text-dark">مسیرهای یادگیری </h6>
                          <span
                            className="text-muted"
                            style={{ fontSize: "11px" }}
                          >
                            مسیرهای یادگیری قدم به قدم برنامه‌نویسی
                          </span>
                        </div>
                      </Link>
                    </div>
                  </div>

                  <div className="grid grid-cols-12 gap-0 ps-4 pb-4 grid-menu">
                    <div className="col-12 lg:col-span-6 pt-4">
                      <Link
                        to=""
                        className="inline-flex items-start text-decoration-none"
                      >
                        <div className="ml-2">
                          <svg
                            width="23"
                            height="23"
                            viewBox="0 0 23 23"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              opacity="0.15"
                              cx="13.8062"
                              cy="13.2944"
                              r="9.19385"
                              fill="#FFA826"
                            ></circle>
                            <path
                              d="M0.785 8C0.785 9.62908 0.873314 10.8846 1.08987 11.859C1.30444 12.8245 1.63433 13.4652 2.08458 13.9154C2.53483 14.3657 3.17551 14.6956 4.14099 14.9101C5.11539 15.1267 6.37092 15.215 8 15.215C9.62908 15.215 10.8846 15.1267 11.859 14.9101C12.8245 14.6956 13.4652 14.3657 13.9154 13.9154C14.3657 13.4652 14.6956 12.8245 14.9101 11.859C15.1267 10.8846 15.215 9.62908 15.215 8C15.215 6.37092 15.1267 5.11539 14.9101 4.14099C14.6956 3.17551 14.3657 2.53483 13.9154 2.08458C13.4652 1.63433 12.8245 1.30444 11.859 1.08987C10.8846 0.873315 9.62908 0.785 8 0.785C6.37092 0.785 5.11539 0.873315 4.14099 1.08987C3.17551 1.30444 2.53483 1.63433 2.08458 2.08458C1.63433 2.53483 1.30444 3.17551 1.08987 4.14099C0.873314 5.11539 0.785 6.37092 0.785 8Z"
                              stroke="#FFA826"
                              stroke-width="1.57"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M7.99996 4.6665V11.3332M11.3333 7.33317V11.3332M4.66663 8.6665V11.3332"
                              stroke="#FFA826"
                              stroke-width="1.57"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </div>
                        <div>
                          <h6 className="text-dark">پیشرفت من </h6>
                          <span
                            className="text-muted"
                            style={{ fontSize: "11px" }}
                          >
                            مسیر پیشرفت آموزشی شما
                          </span>
                        </div>
                      </Link>
                    </div>

                    <div className="col-12 lg:col-span-6 pb-4 pt-4 pe-4">
                      <Link
                        to=""
                        className="inline-flex items-start text-decoration-none"
                      >
                        <div className="ml-2">
                          <svg
                            width="25"
                            height="23"
                            viewBox="0 0 25 23"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              opacity="0.15"
                              cx="15.8062"
                              cy="13.2944"
                              r="9.19385"
                              fill="#1DBE59"
                            ></circle>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M16.3214 2.11028C13.881 0.791546 12.2987 2.02656e-06 10.6634 0C9.02798 0 7.44568 0.791542 5.0053 2.11028L4.96149 2.13395L4.96148 2.13395C3.75491 2.78594 2.79516 3.30457 2.14113 3.74635C1.80989 3.97009 1.51103 4.20394 1.28922 4.45865C1.06485 4.7163 0.863281 5.06072 0.863281 5.48803V11.7601C0.863281 12.1931 1.21429 12.5441 1.64729 12.5441C2.08028 12.5441 2.43129 12.1931 2.43129 11.7601V7.41846C2.86981 7.69436 3.41342 8.00017 4.04977 8.34777C3.9992 8.97843 3.99926 9.79355 3.99934 10.8457L3.99935 10.9761C3.99935 14.8961 5.1708 15.6801 10.6364 15.6801C15.7594 15.6801 17.3274 14.8962 17.3274 10.9761C17.3274 9.86231 17.3274 9.00684 17.2715 8.35074C18.0591 7.92059 18.7049 7.5544 19.1856 7.22971C19.5168 7.00597 19.8156 6.77212 20.0375 6.51741C20.2618 6.25976 20.4634 5.91534 20.4634 5.48803C20.4634 5.06072 20.2618 4.7163 20.0375 4.45865C19.8156 4.20394 19.5168 3.97009 19.1856 3.74634C18.5315 3.30456 17.5718 2.78595 16.3652 2.13396L16.3214 2.11028ZM15.7452 9.17551C13.6245 10.3075 12.1664 10.9761 10.6634 10.9761C9.15979 10.9761 7.70108 10.307 5.5791 9.17422C5.56756 9.64289 5.56736 10.2286 5.56736 10.9761C5.56736 12.9088 5.89203 13.32 6.1699 13.5153C6.37815 13.6616 6.76763 13.8294 7.53133 13.9465C8.28954 14.0628 9.2921 14.1121 10.6364 14.1121C11.8908 14.1121 12.8546 14.0632 13.6025 13.947C14.3541 13.8302 14.7819 13.6605 15.0352 13.4922C15.3855 13.2595 15.7594 12.796 15.7594 10.9761C15.7594 10.2283 15.7582 9.643 15.7452 9.17551ZM3.01881 5.0457C2.72862 5.24172 2.56119 5.38576 2.47202 5.48803C2.56119 5.5903 2.72862 5.73434 3.01881 5.93036C3.60046 6.32325 4.49075 6.80543 5.75074 7.48631C8.28467 8.85559 9.50055 9.40805 10.6634 9.40805C11.8262 9.40805 13.042 8.85559 15.5759 7.48631C16.8359 6.80543 17.7262 6.32325 18.3079 5.93036C18.5981 5.73434 18.7655 5.5903 18.8547 5.48803C18.7655 5.38576 18.5981 5.24172 18.3079 5.0457C17.7262 4.65281 16.8359 4.17063 15.576 3.48976C13.042 2.12047 11.8262 1.56801 10.6634 1.56801C9.50055 1.56801 8.28467 2.12047 5.75074 3.48976C4.49075 4.17063 3.60046 4.65281 3.01881 5.0457ZM18.9077 5.55975L18.9067 5.55765C18.9074 5.55906 18.9077 5.55976 18.9077 5.55975ZM18.9077 5.4163L18.9067 5.41838C18.9071 5.41764 18.9073 5.4171 18.9075 5.41676C18.9076 5.41645 18.9077 5.4163 18.9077 5.4163ZM2.42001 5.41841C2.41927 5.417 2.41898 5.4163 2.41902 5.41631L2.42001 5.41841Z"
                              fill="#1DBE59"
                            ></path>
                          </svg>
                        </div>
                        <div>
                          <h6 className="text-dark">دوره‌های رایگان</h6>
                          <span
                            className="text-muted"
                            style={{ fontSize: "11px" }}
                          >
                            برای شروع بدون هزینه آموزش ببینید
                          </span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="#" className="text-light">
                پرسش و پاسخ ها
              </Nav.Link>
              <Nav.Link href="#" className="text-light">
                مقالات
              </Nav.Link>
              <Nav.Link href="#" className="text-light">
                لرن کد کست
              </Nav.Link>
              <Nav.Link className="nav-item text-light" href="#">
                لرن کد نامه
                <span className="badge bg-danger ms-2">جدید</span>
              </Nav.Link>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle text-light"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  لینک های مفید
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="#">
                      کانال تلگرام
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      سوالات متداول
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      درباره ما
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      ارتباط با ما
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      همکاری با ما
                    </Link>
                  </li>
                </ul>
              </li>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  );
};

export default CustomNavbar;
