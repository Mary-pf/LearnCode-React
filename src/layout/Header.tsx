import Navbar from "./navbar/Nav";

const Header = () => {
  return (
    <header className="d-flex justify-content-between mt-4 position-relative">
      <div className="col">
        <div className="row mx-2">
          <div className="container">
            <div className="row">
              <Navbar />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
