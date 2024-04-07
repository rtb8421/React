
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
   
    {/* <div className="container">
    <header className="d-flex justify-content-center py-3">
    <ul>
        <Link to="/"></Link>
        <Link to="/About"></Link>
        <Link to="/Contact"></Link>
        <Link to="/Project"></Link>
    </ul>

    </header>
</div> */}

    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
        <Link to="/">Demo App</Link>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                <Link to="/">Home</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
              <Link to="/About">About</Link>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link active" href="#">
              <Link to="/Contact">Contact</Link>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link active" href="#">
              <Link to="/Register">Register</Link>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link active" href="#">
              <Link to="/login">Login</Link>
              </a>
            </li>
          </ul>
          
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
    </>
  );
}
export default Navbar;
