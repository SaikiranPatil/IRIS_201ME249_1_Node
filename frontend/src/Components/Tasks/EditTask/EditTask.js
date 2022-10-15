import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { clearErrors, deleteTask, taskDetails, updateTask } from '../../../redux/actions/taskActions';
import { useDispatch, useSelector } from "react-redux";
import { display, formatDateForForm } from '../../Utils/utils';
import Loader from '../../Utils/Loader/Loader';

const EditTask = () => {

    const id = useParams().id;

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const { task, loading, error, isUpdated } = useSelector(store => store.taskDetails);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")
    const [deadline, setDeadline] = useState("")
    const [social, setSocial] = useState("")

    const onSubmitClick = (e) => {
        e.preventDefault();
        dispatch(updateTask(id, { title, description, social }))
        console.log({ title, description, deadline, social })
    }

    useEffect(() => {
        if (error) {
            display(error, "error");
            dispatch(clearErrors);
        }
        if (task) {
            setTitle(task.title);
            setDescription(task.description);
            setSocial(task.socialPlatform);
            setDeadline(formatDateForForm(task.deadline));
        }
        if (isUpdated) {
            display("Task updated Sucessfully");
        }
    }, [dispatch])

    if (loading) return <Loader />

    return (
        <>
            <div className="breadcrumbs">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="breadcrumbs-content">
                                <h1 className="page-title">Edit Tasks</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="account-login section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1 col-12">
                            <div className="register-form">
                                <div className="title">
                                    <h3>Edit Tasks</h3>
                                    <p>
                                        Provide details below to edit tasks
                                    </p>
                                </div>
                                <form id="taskForm" className="row" onSubmit={onSubmitClick}>
                                    <div className="col-15">
                                        <div className="form-group">
                                            <label htmlFor="reg-fn">Task Title</label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                id="reg-fn-title"
                                                name="title"
                                                required
                                                value={title}
                                                onChange={(e) => { setTitle(e.target.value) }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-15">
                                        <div className="form-group">
                                            <label htmlFor="reg-fn-social">Social Platform</label>
                                            <select
                                                className="form-control"
                                                type="text"
                                                id="social"
                                                name="social"
                                                value={social}
                                                required
                                                onChange={(e) => { setSocial(e.target.value) }}
                                            >
                                                <option value="instagram">Instagram</option>
                                                <option value="whatsapp">WhatsApp</option>
                                                <option value="telegram">Telegram</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-15">
                                        <div className="form-group">
                                            <label htmlFor="reg-fn">Description</label>
                                            <textarea
                                                rows="50"
                                                className="form-control"
                                                type="text"
                                                id="reg-fn-description"
                                                name="description"
                                                required
                                                value={description}
                                                onChange={(e) => { setDescription(e.target.value) }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-15">
                                        <div className="form-group">
                                            <label htmlFor="reg-fn">Deadline</label>
                                            <input
                                                className="form-control"
                                                type="date"
                                                id="reg-fn-deadline"
                                                name="deadline"
                                                required
                                                value={formatDateForForm(deadline)}
                                                // value="2022-01-11"
                                                onChange={(e) => { setDeadline(e.target.value) }}
                                            />
                                        </div>
                                    </div>
                                    <div className="button">
                                        <button className="btn" type="submit">
                                            Edit Task
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditTask
