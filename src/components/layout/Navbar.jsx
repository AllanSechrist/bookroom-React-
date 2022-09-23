import React from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../api/axios";
const LOGOUT_URL = "v1/auth/logout/"


function Navbar() {
	const logout = () => {
		localStorage.removeItem("access_token")
		axiosInstance.post(LOGOUT_URL)

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
						{localStorage.getItem("access_token") && (
							<button className="btn btn-ghost btn-sm rounded-btn" onClick={() => logout()}>
								Logout
							</button>
						)}
						<Link to="/login" className="btn btn-ghost btn-sm rounded-btn">
							Login
						</Link>
					</div>
				</div>
      </div>
    </nav>
  );
}

export default Navbar;
