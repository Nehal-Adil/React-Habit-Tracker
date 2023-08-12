import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./Addhabit.scss";
import { useDispatch } from "react-redux";
import { addHabit } from "../../redux/reducer/HabitReducer";

const AddHabit = () => {
  const dispatch = useDispatch();

  // To Save the habit on our page
  const handleSave = (e) => {
    const habitName = document.getElementById("habitName").value;
    dispatch(addHabit(habitName));

    //Display Notification
    toast.success("Habit added successfully", {
      position: "top-right",
      autoClose: 800,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    document.getElementById("habitName").value = "";
  };

  return (
    <>
      {/* Container of where add habit data store */}
      <div className="container1 mt-5 w-55">
        <div className="card1 p-4 bg-dark">
          <form action="">
            <h1 className="text-dark text-center mb-4">Add New Habit</h1>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control border border-dark"
                id="habitName"
                aria-describedby="emailHelp"
                placeholder="Enter Habit Name"
                required
              />
            </div>
            <Link
              to="/"
              type="submit"
              className="btn btn-success mt-2 mybtn"
              onClick={handleSave}
            >
              Add Habit
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddHabit;
