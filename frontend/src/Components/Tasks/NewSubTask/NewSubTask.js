import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allUsersByCadmin, clearErrors, register } from "../../../redux/actions/userAction";
import { useNavigate, useParams } from "react-router-dom";
import { display } from '../../Utils/utils';
import { newSubTask } from "../../../redux/actions/taskActions";

const NewSubTask = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const taskId = useParams().id;

  var { error, loading, users } = useSelector(
    (state) => state.allUsers
  );

  const { sucess, task } = useSelector(
    (state) => state.newSubTask
  )

  const [title, setTitle] = useState("");
  const [assignee, setAssignee] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");

  const onSubmitClick = (e) => {
    e.preventDefault();
    dispatch(newSubTask({ "subTaskTitle": title, taskId, "assigneeId": assignee, description, deadline }));
  };

  useEffect(() => {
    if (sucess) {
      display("Sub Task Created Sucessfully");
      navigate(`/task/${task._id}`)
    }

    if (error) {
      display(error, "warn");
      dispatch(clearErrors());
    }

    dispatch(allUsersByCadmin())
  }, [dispatch, error, task, sucess]);
  return (
    <>
      <div className="breadcrumbs">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="breadcrumbs-content">
                <h1 className="page-title">New Sub Task</h1>
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
                  <h3>Add Sub Tasks</h3>
                  <p>
                    Add SubTask for the task
                  </p>
                </div>
                <form id="taskForm" className="row" onSubmit={onSubmitClick}>
                  <div className="col-15">
                    <div className="form-group">
                      <label htmlFor="reg-fn">Sub Task Title</label>
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
                      <label htmlFor="reg-fn">Assignee</label>
                      <select
                        className="form-control"
                        type="text"
                        id="social"
                        name="social"
                        value={assignee}
                        required
                        onChange={(e) => { setAssignee(e.target.value) }}
                      >
                        <option defaultValue value="">Please choose Assignee</option>
                        {
                          users && users.map(user => <option value={user._id} key={user._id}>{user.name}</option>)
                        }
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
                      Create Sub Task
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

export default NewSubTask
