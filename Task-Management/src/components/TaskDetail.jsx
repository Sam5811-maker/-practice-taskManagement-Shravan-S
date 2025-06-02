import { useParams } from "react-router-dom";
import data from "../MockData/MockDataSet.json";

const TaskDetail = () => {
  const { id } = useParams();
  const task = data.find(task => String(task.id) === id);

  if (!task) {
    return (
      <div>
        <h1>Task Not Found</h1>
        <p>Sorry, the task you're looking for doesn't exist.</p>
        <p><a href="/">Go back to Task List</a></p>
      </div>
    );
  }

  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
    </div>
  );
};

export default TaskDetail;
