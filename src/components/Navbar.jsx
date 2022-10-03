import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="">
          <img
            alt="Camara photo"
            src="https://cdn-icons-png.flaticon.com/512/2556/2556460.png"
            width="40px"
            className=""
          />{" "}
          <Link to="/"> Home </Link>
        </div>
        |
        <div className="">
          <img
            alt="Camara photo"
            src="https://cdn-icons-png.flaticon.com/512/2820/2820715.png"
            width="40px"
            className=""
          />
          <Link to="/Favorites"> Favoritos </Link>
        </div>
      </div>
    </nav>
  );
}
