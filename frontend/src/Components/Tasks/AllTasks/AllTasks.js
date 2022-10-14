import React, { useEffect } from "react";
import Task from '../Task/Task'
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getTasks } from "../../../redux/actions/taskActions";
import { useNavigate } from "react-router";
import { display } from "../../Utils/utils";
import './AllTasks.css'

const AllTasks = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { tasks, error } = useSelector(
        (state) => state.tasks
    );

    useEffect(() => {
        if (error) {
            dispatch(clearErrors());
            display("Please Login To Acess the resource");
            navigate("/login");
        } else {
            dispatch(getTasks());
        }

    }, [dispatch, error]);

    return (
        <section className="product-grids section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-15">
                        <div className="product-grids-head">
                            <div className="tab-content" id="nav-tabContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="nav-grid"
                                    role="tabpanel"
                                    aria-labelledby="nav-grid-tab"
                                >
                                    <div className="row justify-content-center">
                                        <div className="col-lg-4 col-12">
                                            <button type="button" className="btn add-task-btn" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>navigate("/tasks/new")}>Add Task</button>
                                        </div>
                                    </div>
                                    <div className="row">
                                        {
                                            tasks && tasks.map(task => (
                                                <Task key={task._id} task={task} />
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AllTasks