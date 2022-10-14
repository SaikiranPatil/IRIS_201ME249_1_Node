import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { clearErrors, taskDetails } from '../../../redux/actions/taskActions';
import { useDispatch, useSelector } from "react-redux";
import { display, formatDate } from '../../Utils/utils';
import Loading from '../../Utils/Loading/Loading';
import SubTask from '../SubTask/SubTask';
import './SingleTask.css'

const SingleTask = () => {

    const id = useParams().id;

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const { task, loading, error } = useSelector(store => store.taskDetails);

    useEffect(() => {
        if (error) {
            display(error, "error");
            dispatch(clearErrors);
        }
        dispatch(taskDetails(id));
    }, [dispatch])


    return (
        <>
            {
                task && loading ? <Loading /> :
                    <>
                        <section className="item-details section">
                            <div className="container">
                                <div className="product-details-info">
                                    <div className="single-block">
                                        <div className="row">
                                            <div className="col-lg-6 col-12">
                                                <div className="info-body custom-responsive-margin">
                                                    <h4>Title</h4>
                                                    <p>
                                                        {task.title}
                                                    </p>
                                                    <h4>Details</h4>
                                                    <p>
                                                        {task.description}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <div className="info-body">
                                                    <h4>Deadline</h4>
                                                    <p>{formatDate(task.deadline)}</p>
                                                    <h4>Social Platform</h4>
                                                    <p>{task.social}</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-4 col-12">
                                            <div className="single-block give-review">
                                                <button
                                                    type="button"
                                                    className="btn task-btn"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal"
                                                    onClick={() => navigate(`/task/subtask/create/${task._id}`)}
                                                >
                                                    Add SubTask
                                                </button>
                                                <button className="btn task-btn edit-btn">Delete Task</button>
                                                <button className="btn task-btn edit-btn">Edit Task</button>
                                            </div>
                                        </div>
                                        <div className="col-lg-8 col-12">
                                            <div className="single-block">
                                                <div className="reviews">
                                                    <h4 className="title">{task.noOfsubTasks} Sub tasks(Overall)</h4>
                                                    {
                                                        task && task.subTasks && !task.subTasks.length ? <>No SubTasks</> : task.subTasks && task.subTasks.map(subTask => <SubTask subTask={subTask} />)
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </>
            }
        </>
    )
}

export default SingleTask
