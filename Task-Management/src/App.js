import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import TaskList from "./TaskList";
import data from "../MockData/MockDataSet.json";
import TaskDetail from "./ProductPage";


const App = () => {

    return(
        <Router>
            <Routes>
            <Route path="../MockData/MockDataSet.json/:Id"  element={<data/>} />
        </Routes>
        </Router>
    );
};
export default App;