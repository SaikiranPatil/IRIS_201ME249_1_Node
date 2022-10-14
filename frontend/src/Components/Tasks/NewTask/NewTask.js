import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, register } from "../../../redux/actions/userAction";
import { useNavigate, Link } from "react-router-dom";
import { display } from '../../Utils/utils';
import { BsFillCaretDownFill } from 'react-icons/bs'

const NewTask = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { error, loading, isAuthenticated } = useSelector(
        (state) => state.user
    );

    const [title, setTitle] = useState("");
    const [social, setSocial] = useState("");
    const [description, setDescription] = useState("");
    const [deadline, setDeadline] = useState("");

    const onSubmitClick = (e) => {
        e.preventDefault();
        console.log(title, social, description, deadline);
    };

    useEffect(() => {
        if (error) {
            display(error, "error");
            dispatch(clearErrors());
        }
    }, [dispatch, error, isAuthenticated, navigate]);
    return (
        <div className="account-login section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1 col-12">
                        <div className="register-form">
                            <div className="title">
                                <h3>Add Tasks</h3>
                                <p>
                                    Registration takes less than a minute but gives you full control
                                    over your orders.
                                </p>
                            </div>
                            <form className="row" onSubmit={onSubmitClick}>
                                <div className="col-15">
                                    <div className="form-group">
                                        <label htmlFor="reg-fn">Task Title</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            id="reg-fn"
                                            name="title"
                                            required
                                            value={title}
                                            onChange={(e) => { setTitle(e.target.value) }}
                                        />
                                    </div>
                                </div>
                                <div className="col-15">
                                    <div className="form-group">
                                        <label htmlFor="reg-fn">Social Platform</label>
                                        <select
                                            className="form-control"
                                            type="text"
                                            id="reg-fn"
                                            name="social"
                                            required
                                            value={social}
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
                                            id="reg-fn"
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
                                            id="reg-fn"
                                            name="deadline"
                                            required
                                            value={deadline}
                                            onChange={(e) => { setDeadline(e.target.value) }}
                                        />
                                    </div>
                                </div>
                                <div className="button">
                                    <button className="btn" type="submit">
                                        Create Task
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewTask
