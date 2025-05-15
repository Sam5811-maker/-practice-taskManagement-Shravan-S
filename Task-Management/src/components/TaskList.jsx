import {useParams} from "react-router-dom";
import data from "../MockData/MockDataSet.json";
import {Link} from "react-router";

const TaskList = () => {
    const allTasks = data.map(task => (
        {...task}
    ));
const {Id} = useParams();
    return(

        <div className="task-list">
        <h1> 
            Task Management
        </h1>
            <ul>
                {allTasks.map(task => (
                    <div>
                    <li>
                        {task.title}
                    </li>
                        <Link to = {`/task/${task.Id}`}>

                        </Link>

                    </div>
                )
                )}
            </ul>
        </div>
    );
};
export default TaskList;