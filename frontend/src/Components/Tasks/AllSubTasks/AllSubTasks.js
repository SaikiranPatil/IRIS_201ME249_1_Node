import React, { useEffect } from "react";
import Task from '../Task/Task'
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getTasks } from "../../../redux/actions/taskActions";
import { useNavigate } from "react-router";
import { display } from "../../Utils/utils";
import { GrFormNext } from 'react-icons/gr';

const AllSubTAsks = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { tasks, error } = useSelector(
        (state) => state.tasks
    );

    const { user, isAuthenticated } = useSelector(state => state.user)

    useEffect(() => {
        if (error) {
            dispatch(clearErrors());
            display("Please Login To Acess the resource");
            // navigate("/login");
        }

    }, [dispatch]);

    return (
        <>
            <div className="breadcrumbs">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="breadcrumbs-content">
                                <h1 className="page-title">All Sub Tasks</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
        </>
    )
}

export default AllSubTAsks