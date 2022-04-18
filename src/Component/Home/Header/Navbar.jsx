import { Link } from "react-router-dom";
import "./Header.css";
const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container-fluid">
          <Link class="navbar-brand" href="#">
            YourDreamState
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="#">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Pages
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Agent
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Subscribe
                </Link>
              </li>
            </ul>
            <section >
              {" "}
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item d-none d-lg-block me-4">
                  <i className="material-icons mt-2 text-dark fs-4">search</i>
                </li>
                <li className="nav-item ">
                  <button className="btn btn px-3 sign">Sign In</button>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
