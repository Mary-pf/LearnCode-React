import "./style.css";

const NavTop = () => {
  return (
    <div className="d-flex">
      <div className="col-md-3">
        <a className="navbar-brand" href="#">
          <svg
            className="md:w-52 pt-4 sm:w-40 w-18 sm:inline-block dark:hidden hidden"
            width="188"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 578 128"
            xmlSpace="preserve"
          >
            <g>
              <g>
                <polygon
                  className="st1"
                  points="46.3,124.7 31.8,103.4 46.3,88.9 60.9,103.4"
                ></polygon>
                <path
                  className="st2"
                  d="M86.5,43.7v48l-20-15.1c0,0,2.2-18.7,2.6-32.9c0.2-7-6.4-13-22.6-21c-16.3,8.1-22.8,14-22.6,21 c0.4,14.2,2.6,32.9,2.6,32.9l-20,15.1v-48c0-8.5,3.6-16.2,10.7-22.8c5-4.7,11.9-9,22.3-14.1l7-3.5l7,3.5 c10.4,5.1,17.3,9.5,22.3,14.1C82.9,27.5,86.5,35.2,86.5,43.7z"
                ></path>
              </g>
              <path
                className="st3"
                d="M163.7,86.1l-17-16.5h-21.5v16.5h-12V26.4h43.7c10.3,0,18.9,9.9,18.9,21.6c0,9.2-5.5,17.7-13.2,20.5l17.9,17.6H163.7z M156.4,56.5c3.9,0,7.4-4,7.4-8.5c0-4.6-3.4-8.5-7.4-8.5h-31.2v16.9H156.4z"
              ></path>
            </g>
          </svg>
        </a>
      </div>
      <div className="col-md-9">
        <button
          className="navbar-toggler bg-dark"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse d-flex justify-content-evenly"
          id="navbarSupportedContent"
        >
          <form className="mt-3" role="search">
            <input
              className="form-control"
              style={{ width: "34rem" }}
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <a href="#">
              <i className="bi bi-search"></i>
            </a>
          </form>
          <div className="my-icon">
            <div
              className="btn d-flex align-items-center"
              aria-label="Basic example"
            >
              <div>
                <button
                  type="button"
                  className="btn"
                  style={{ fontSize: "1.7rem" }}
                >
                  <span className="bi bi-circle-half"></span>
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="btn"
                  style={{ fontSize: "1.7rem" }}
                >
                  <span className="bi bi-basket-fill"></span>
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="btn"
                  style={{ fontSize: "1.7rem" }}
                >
                  <span className="bi bi-bell-fill"></span>
                </button>
              </div>
              <div>
                {/* Example single danger button */}
                <div className="btn-group dropstart">
                  <button
                    type="button"
                    className="btn btn-sm"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ fontSize: "2rem" }}
                  >
                    <span className="bi bi-person-circle"></span>
                  </button>
                  <ul
                    className="dropdown-menu dropdown-menu-light mt-5 rounded-3"
                    style={{ width: "17rem" }}
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        <span
                          className="bi bi-person-circle pe-1"
                          style={{ fontSize: "1.3rem" }}
                        ></span>
                        مشاهده پنل کاربری
                      </a>
                    </li>

                    <li className="d-flex items-center justify-content-evenly">
                      <a className="dropdown-item" href="#">
                        کیف پول
                      </a>
                      <p
                        className="pe-3 pt-2 text-muted"
                        style={{ fontSize: "11px" }}
                      >
                        0تومان
                      </p>
                    </li>
                    {/* <li>
                                                            <a className="dropdown-item d-flex px-3 text-secondary"
                                                                href="#">
                                                                <div className="d-flex">
                                                                    <span className="ps-2">
                                                                        <a href="#">کیف پول</a>
                                                                    </span>
                                                                    <span>
                                                                        <p className="pe-3 pt-2 text-muted" style="font-size: 11px;">
                                                                            0تومان</p>
                                                                        </span>
                                                                </div>
                                                            </a>
                                                        </li> */}

                    <li className="d-flex items-center justify-content-evenly">
                      <a className="dropdown-item" href="#">
                        تجربه کاربری
                      </a>
                      <p
                        className="pe-3 pt-2 text-success"
                        style={{ fontSize: "14px" }}
                      >
                        458تجربه
                      </p>
                    </li>
                    <li className="d-flex items-center justify-content-end">
                      <a className="dropdown-item" href="#">
                        باقیمانده اشتراک
                      </a>
                      <p
                        className="pt-2 ps-1 text-warning"
                        style={{ fontSize: "14px" }}
                      >
                        عضو ویژه نیستید
                      </p>
                    </li>
                    <li>
                      <hr className="dropdown-divider text-muted" />
                    </li>
                    <li>
                      <a
                        className="dropdown-item d-flex items-center px-3 text-secondary"
                        href="#"
                      >
                        <div className="d-flex items-center">
                          <svg
                            className="pt-1"
                            width="25"
                            height="25"
                            viewBox="0 0 21 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M13.8862 13.2399C13.9552 14.801 12.6953 16.1211 11.0724 16.1874C10.9529 16.1925 5.12549 16.1807 5.12549 16.1807C3.5105 16.3033 2.09705 15.1428 1.96966 13.5876C1.96007 13.4717 1.96268 7.21902 1.96268 7.21902C1.89114 5.65627 3.14928 4.33284 4.773 4.26398C4.89428 4.2581 10.7138 4.26902 10.7138 4.26902C12.3367 4.1481 13.7545 5.31701 13.8801 6.87976C13.8889 6.99229 13.8862 13.2399 13.8862 13.2399Z"
                              stroke="currentColor"
                              stroke-width="1.7"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M13.8889 8.50365L16.6949 6.20729C17.3902 5.6381 18.4331 6.13401 18.4323 7.03125L18.422 13.2932C18.4212 14.1905 17.3774 14.6821 16.6838 14.1129L13.8889 11.8166"
                              stroke="currentColor"
                              stroke-width="1.7"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                          <span className="ps-2">دوره ها</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item d-flex items-center px-3 text-secondary"
                        href="#"
                      >
                        <div className="d-flex items-center">
                          <svg
                            className="pt-1"
                            width="25"
                            height="25"
                            viewBox="0 0 21 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M18.4382 12.2664H14.9887C13.7221 12.2656 12.6955 11.2398 12.6947 9.9732C12.6947 8.70663 13.7221 7.68079 14.9887 7.68001H18.4382"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M15.3789 9.92071H15.1133"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6.60165 2.55625H13.9666C16.436 2.55625 18.438 4.55823 18.438 7.0277V13.1431C18.438 15.6126 16.436 17.6146 13.9666 17.6146H6.60165C4.13218 17.6146 2.1302 15.6126 2.1302 13.1431V7.0277C2.1302 4.55823 4.13218 2.55625 6.60165 2.55625Z"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M5.99492 6.42315H10.5953"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                          <span className="ps-2">مالی و اشتراک</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item d-flex items-center px-3 text-secondary"
                        href="#"
                      >
                        <div className="d-flex items-center">
                          <svg
                            className="pt-1"
                            width="23"
                            height="23"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="0.75"
                              y="0.75"
                              width="17.5"
                              height="17.5"
                              rx="5.25"
                              stroke="currentColor"
                              stroke-width="1.5"
                            ></rect>
                            <path
                              d="M9.50018 4.74982C8.75758 4.74982 8.14246 5.03617 7.72098 5.51032C7.31246 5.96991 7.12518 6.5603 7.12518 7.12482C7.12518 8.11758 7.70632 8.80324 8.08418 9.24907L8.1044 9.27293C8.55085 9.80006 8.70852 10.0222 8.70852 10.2915C8.70852 10.7287 9.06296 11.0832 9.50018 11.0832C9.93741 11.0832 10.2918 10.7287 10.2918 10.2915C10.2918 9.39408 9.73447 8.7428 9.38037 8.32905C9.35682 8.30153 9.33416 8.27506 9.31263 8.24964C8.89792 7.75998 8.70852 7.48219 8.70852 7.12482C8.70852 6.89767 8.78513 6.6964 8.90438 6.56223C9.01069 6.44264 9.18723 6.33315 9.50018 6.33315C9.81314 6.33315 9.98968 6.44264 10.096 6.56223C10.2152 6.6964 10.2918 6.89767 10.2918 7.12482C10.2918 7.56204 10.6463 7.91649 11.0835 7.91649C11.5207 7.91649 11.8752 7.56204 11.8752 7.12482C11.8752 6.5603 11.6879 5.96991 11.2794 5.51032C10.8579 5.03617 10.2428 4.74982 9.50018 4.74982Z"
                              fill="currentColor"
                            ></path>
                            <path
                              d="M9.50018 11.8748C9.06296 11.8748 8.70852 12.2293 8.70852 12.6665C8.70852 13.1037 9.06296 13.4582 9.50018 13.4582C9.93741 13.4582 10.2918 13.1037 10.2918 12.6665C10.2918 12.2293 9.93741 11.8748 9.50018 11.8748Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                          <span className="ps-2">پرسش ها</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item d-flex items-center px-3 text-secondary"
                        href="#"
                      >
                        <div className="d-flex">
                          <svg
                            className="pt-1"
                            width="25"
                            height="25"
                            viewBox="0 0 21 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.7949 6.70662V5.91163C12.7949 4.17764 11.3889 2.7717 9.65495 2.7717H5.50104C3.76791 2.7717 2.36197 4.17764 2.36197 5.91163V15.3953C2.36197 17.1293 3.76791 18.5352 5.50104 18.5352H9.66347C11.3923 18.5352 12.7949 17.1336 12.7949 15.4047V14.6012"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M18.5835 10.6534H8.32356"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M16.0883 8.16948L18.5833 10.6533L16.0883 13.138"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                          <span className="ps-2">خروج از حساب کاربری</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavTop;
