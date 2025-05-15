import { useParams } from "react-router-dom";


const TaskDetail = () =>{
    const {Id, title, description} = useParams();
    return (
        <div>
            <h1>
                {title}
            </h1>
            <p>
                {description}
            </p>
        </div>
    );
};
export default TaskDetail;