import NavBottom from "./NavBottom";

const Navbar = () => {

  return (
    <>
      <div className="navbar navbar-expand-md bg-light navbar-light">
        <div className="container">
          <div className="row align-items-center">
            {/* بخش لوگو */}
            <div className="col-6 col-md-3 text-center text-md-start">
              <a className="navbar-brand" href="#">
                <img
                  src="./Images/LOGO/C.jpg"
                  className="img-fluid rounded w-75 h-50"
                  alt="LOGO"
                />
              </a>
            </div>
            {/* بخش جستجو و دکمه‌ها */}
            <div className="col-6 col-md-9">
              <div className="collapse navbar-collapse d-flex justify-content-end align-items-center">
                {/* فرم جستجو  */}
                <form className="d-none d-md-flex me-3" role="search">
                  <input
                    className="form-control"
                    style={{ width: "34rem" }}
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <a href="#" className="btn btn-light ms-2">
                    <i className="bi bi-search"></i>
                  </a>
                </form>

                {/* دکمه تغییر تم  */}
                <button
                  type="button"
                  className="btn border-0 me-2"
                  style={{ fontSize: "1.7rem" }}
                >
                  <span className="bi bi-circle-half"></span>
                </button>

                {/* دکمه ورود و عضویت  */}
                <div>
                  <button className="btn btn-outline-primary me-2">
                    عضویت
                  </button>
                  <button className="btn btn-primary">ورود</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* منوی پایین */}
      <div className="container" style={{width: "75rem"}}>
        <div className="row navbar-bottom bg-dark-subtle">
          <div className="container col-12">
            <NavBottom />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
