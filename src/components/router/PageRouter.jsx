import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// PAGES //
import Home from "../../pages/Home";
import About from "../../pages/About";
import Books from "../../pages/Books";
import ReqBook from "../../pages/Book";
import NotFound from "../../pages/NotFound";
import Login from "../../pages/Login";
import Profile from "../../pages/Profile";
import ReqRoom from "../../pages/Room";
// COMPONENTS //
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
// CONTEXT //
import injectContext from "../../context/helpers/Context";

function PageRouter() {
  return (
    <div>
      <Router>
        <div className="flex flex-col justify-between h-screen">
          <Navbar />
          <main className="container mx-auto px-3 pb-12">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/books" element={<Books />} /> {/* DISPLAYS ALL OF THE USERS BOOKS*/}
              <Route path="/books/:bookId" element={<ReqBook />} /> {/* DISPLAYS REQUESTED BOOK*/}
              <Route path="/profile" element={<Profile />} /> {/* DISPLAYS ALL OF THE USERS ROOMS*/}
              <Route path="/profile/room/:roomId" element={<ReqRoom />} /> {/* DISPLAYS REQUESTED ROOM*/}
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default injectContext(PageRouter);
