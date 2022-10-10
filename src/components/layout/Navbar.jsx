import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/helpers/Context";

function Navbar() {
  const { store, actions } = useContext(Context);
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
            {store.token && (
              <>
                {/* <Link to="/profile/room/new" className="btn btn-ghost btn-sm rounded-btn">
                  + New Room
                </Link> */}
                <Link to='/books' className='btn btn-ghost btn-sm rounded-btn'>
                  Books
                </Link>
                <Link to="/books/new" className="btn btn-ghost btn-sm rounded-btn">
                  + New Book
                </Link>
                <button
                  className="btn btn-ghost btn-sm rounded-btn"
                  onClick={() => {
                    actions.logout();
                  }}
                >
                  Logout
                </button>
              </>
            )}
            {!store.token && (
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
