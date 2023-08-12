import { createSlice } from "@reduxjs/toolkit";
let id = 1;

export const HabitSlice = createSlice({
  name: "habits",
  initialState: [],
  reducers: {
    addHabit: (state, action) => {
      const today = new Date();
      let day = today.getDate() - today.getDay();
      const month = today.getMonth();
      const year = today.getFullYear();

      const habit = {
        id: id++,
        name: action.payload,
        weekLog: [
          {
            id: 0,
            day: "Sunday",
            dd: day,
            mm: month,
            yyyy: year,
            isDone: "",
          },
          {
            id: 1,
            day: "Monday",
            dd: day + 1,
            mm: month,
            yyyy: year,
            isDone: "",
          },
          {
            id: 2,
            day: "Tuesday",
            dd: day + 2,
            mm: month,
            yyyy: year,
            isDone: "",
          },
          {
            id: 3,
            day: "Wednesday",
            dd: day + 3,
            mm: month,
            yyyy: year,
            isDone: "",
          },
          {
            id: 4,
            day: "Thursday",
            dd: day + 4,
            mm: month,
            yyyy: year,
            isDone: "",
          },
          {
            id: 5,
            day: "Friday",
            dd: day + 5,
            mm: month,
            yyyy: year,
            isDone: "",
          },
          {
            id: 6,
            day: "Saturday",
            dd: day + 6,
            mm: month,
            yyyy: year,
            isDone: "",
          },
        ],
      };
      const tempHabits = [...state, habit];
      return tempHabits;
    },

    // this is for deleteHabit action
    deleteHabit: (state, action) => {
      const tempHabits = state.filter((habit) => habit.id !== action.payload);
      return tempHabits;
    },
    // this is for habitDone action
    habitDone: (state, action) => {
      let tempHabits = state;
      for (let i = 0; i < tempHabits.length; i++) {
        if (tempHabits[i].id === Number(localStorage.getItem("id"))) {
          tempHabits[i].weekLog[action.payload].isDone = true;
        }
      }
      return tempHabits;
    },
    // this is for habitNotDone action
    habitNotDone: (state, action) => {
      let tempHabits = state;
      for (let i = 0; i < tempHabits.length; i++) {
        if (tempHabits[i].id === Number(localStorage.getItem("id"))) {
          tempHabits[i].weekLog[action.payload].isDone = false;
        }
      }
      return tempHabits;
    },
    // this is for habitNone action
    habitNone: (state, action) => {
      let tempHabits = state;
      for (let i = 0; i < tempHabits.length; i++) {
        if (tempHabits[i].id === Number(localStorage.getItem("id"))) {
          tempHabits[i].weekLog[action.payload].isDone = "";
        }
      }
      return tempHabits;
    },
  },
});

export const { addHabit, deleteHabit, habitDone, habitNotDone, habitNone } =
  HabitSlice.actions;

export default HabitSlice.reducer;
