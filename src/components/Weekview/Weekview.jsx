import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Day from "../Day/Day";
import "./Weekview.scss";

const Weekview = () => {
  // select to habits
  let habitsState = useSelector((state) => state.habits);
  let habit = {};

  for (let i = 0; i < habitsState.length; i++) {
    if (habitsState[i].id === Number(localStorage.getItem("id"))) {
      habit = habitsState[i];
    }
  }

  return (
    <div className="week">
      <h1 className="text-center  text-dark">{habit.name}</h1>
      <div className="days-container">
        {habit.weekLog.map((day, index) => (
          <Day day={day} key={index} />
        ))}
      </div>
      <div className="d-grid gap-2 col-6 mx-auto mt-5">
        <button className="btn1 font-monospace" type="button">
          <Link to="/" className="link ">
            Back
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Weekview;
