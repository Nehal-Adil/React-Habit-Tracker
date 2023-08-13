import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AddHabit from "./components/AddHabit/AddHabit";
import Weekview from "./components/Weekview/Weekview";
import { useSelector } from "react-redux";
import List from "./components/List/List";

// our main app component
function App() {
  let habits = useSelector((state) => state["habits"]);
  return (
    <div className="App">
      <Router>
        <Navbar />
        {/* here are some of our various routes */}
        <Routes>
          <Route path="/" element={<List habits={habits} />} />
          <Route path="/add" element={<AddHabit />} />
          <Route path="/week-view" element={<Weekview />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
