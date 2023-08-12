import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  habitDone,
  habitNone,
  habitNotDone,
} from "../../redux/reducer/HabitReducer";
import "./Day.scss";

const Day = ({ day }) => {
  // Today's date
  const today = new Date();

  // Day from today's date
  const todayDay = today.getDay();
  const dispatch = useDispatch();
  const date = new Date(day.yyyy, day.mm, day.dd);

  const done = () => {
    if (day.id > todayDay) {
      // react toast for notification
      toast.warn("You cannot change your next days status", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    // calling habitDone from reducer
    dispatch(habitDone(day.id));
  };

  const notDone = () => {
    if (day.id > todayDay) {
      toast.warn("You cannot change your next days status", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    // calling habitNotDone from reducer
    dispatch(habitNotDone(day.id));
  };
  const none = () => {
    if (day.id > todayDay) {
      toast.warn("You cannot change your next days status", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }
    // calling habitNone from reducer
    dispatch(habitNone(day.id));
  };

  return (
    // container of where day data store
    <div className="day-container">
      <h5 className="text-center mt-2">{day.day}</h5>
      <p className="text-center">
        {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}
      </p>
      <i
        className={
          day.isDone === true
            ? "fa-solid fa-square-check circle-icon active"
            : "fa-solid fa-square-check circle-icon"
        }
        onClick={done}
      ></i>
      <i
        className={
          day.isDone === false
            ? "fa-solid fa-square-xmark circle-icon notactive"
            : "fa-solid fa-square-xmark circle-icon"
        }
        onClick={notDone}
      ></i>
      <i
        className={
          day.isDone === ""
            ? "fa-solid fa-square-minus circle-icon none"
            : "fa-solid fa-square-minus circle-icon"
        }
        onClick={none}
      ></i>
    </div>
  );
};

export default Day;
