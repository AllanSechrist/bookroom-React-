import React, { useContext } from "react";
import LoginContext from "../../context/login/LoginContext";
import { Link } from "react-router-dom";

function Navbar() {
  const { token, dispatch } = useContext(LoginContext);

	const handleOnClick = () => {
		dispatch({type: "LOGOUT"})
	}


  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <Link to="/" className="text-lg font-bold align-middle">
            BookRoom
          </Link>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
              Home
            </Link>
            <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
              About
            </Link>
            {token ? (
              <button
                className="btn btn-ghost btn-sm rounded-btn"
                onClick={handleOnClick}
              >
                Logout
              </button>
            ) : (
              <Link to="/login" className="btn btn-ghost btn-sm rounded-btn">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
