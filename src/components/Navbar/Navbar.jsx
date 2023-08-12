import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // change state acording time
  const [hour, setHour] = useState(0);
  useEffect(() => {
    const date = new Date();
    setHour(date.getHours());
  }, []);

  return (
    <div className="Navbar mb-4 ">
      <nav
        className="navbar  navbar-dark justify-content-between "
        style={{ backgroundColor: "#ff7239" }}
      >
        <Link to="/" className="navbar-brand ms-3">
          <h1 className="text-light text-center">HABIT TRACKER</h1>
        </Link>
        <form action="" className="form-inline">
          <Link
            to="/add"
            className="btn btn-success  me-5 my-sm-0 m-2 font-sans-serif "
            type="submit"
          >
            Add New Habits
          </Link>
        </form>
      </nav>
      <h2 className="text-primary text-center mt-2">
        Good &nbsp;
        {hour <= 12
          ? "Morning"
          : hour <= 17
          ? "Afternoon"
          : hour <= 21
          ? "Evening"
          : "Night"}
      </h2>
    </div>
  );
};

export default Navbar;
