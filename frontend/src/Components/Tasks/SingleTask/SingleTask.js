import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { clearErrors, deleteTask, taskDetails } from '../../../redux/actions/taskActions';
import { useDispatch, useSelector } from "react-redux";
import { display, formatDate } from '../../Utils/utils';
import Loader from '../../Utils/Loader/Loader';
import SubTask from '../SubTask/SubTask';
import './SingleTask.css'
import { DELETE_TASK_RESET } from '../../../redux/constants/taskConstants';

const SingleTask = () => {

    const id = useParams().id;

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const { task, loading, error } = useSelector(store => store.taskDetails);

    const { loading: deleteLoading, isDeleted, error: deleteError } = useSelector(store => store.newTask);

    const onDeleteBtnClick = () => {
        dispatch(deleteTask(id));
    }

    useEffect(() => {
        if (error) {
            display(error, "error");
            dispatch(clearErrors);
        }
        if (isDeleted) {
            display("Task deleted successfully")
            navigate("/");
            dispatch({ type: DELETE_TASK_RESET });
        }
        dispatch(taskDetails(id));
    }, [dispatch, isDeleted])

    if (!task) return


    return (
        <>
            {
                loading ? <Loader /> :
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
                                                    <p>{task.social ? task.social : "Instagram"}</p>
                                                    <h4>Date Created</h4>
                                                    <p>{formatDate(task.createdAt)}</p>
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
                                                <button className="btn task-btn edit-btn" onClick={onDeleteBtnClick}>Delete Task</button>
                                                <button className="btn task-btn edit-btn" onClick={() => navigate(`/task/edit/${id}`)}>Edit Task</button>
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
