import { Link } from "react-router-dom";
import data from "../MockData/MockDataSet.json";

const TaskList = () => {
  return (
    <div className="task-list">
      <h1>Task Management</h1>
      <ul>
        {data.map(task => (
          <li key={task.id}>
            <Link to={`/task/${task.id}`}>{task.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
