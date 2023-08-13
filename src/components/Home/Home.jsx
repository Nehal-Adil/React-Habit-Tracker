import React from "react";
import "./Home.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteHabit } from "../../redux/reducer/HabitReducer";

const Home = ({ habit }) => {
  const today = new Date();
  const todayDay = today.getDay();
  let count = 0;

  // Done days add in this
  for (let i = 0; i < habit.weekLog.length; i++) {
    if (habit.weekLog[i].isDone === true) {
      count++;
    }
  }

  // using navigate to open new page
  const navigate = useNavigate();

  const dispatch = useDispatch();

  //Delete function
  const handleDelete = () => {
    dispatch(deleteHabit(habit.id));
    alert("Habit deleted successfully");
  };

  // set id to navigate to the week-view page
  const setId = () => {
    localStorage.setItem("id", habit.id);
    navigate("/week-view");
  };

  return (
    // container for seeing your week status
    <div className="container mb-3 w-75">
      <div className="card">
        <div className="habits">
          <div className="left">
            <div>
              <h4>{habit.name}</h4>
              <p className="day-complete text-dark">
                {count}/{todayDay + 1}days
              </p>
            </div>
          </div>
          <div className="right">
            <div className="log-btn btn btn-warning" onClick={setId}>
              Week View
            </div>

            <div className=" btn btn-danger " onClick={handleDelete}>
              Delete
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
