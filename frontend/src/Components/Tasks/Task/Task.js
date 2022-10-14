import React from 'react'
import { Link } from "react-router-dom";
import { countDays, formatDate } from '../../Utils/utils';
import './Task.css'
import { BsClipboard } from 'react-icons/bs'

const Task = ({ task }) => {

    return (
        <div className="task col-lg-4 col-md-6 col-12">
            <div className="single-product">
                <div className="product-image">
                    <img alt="#" style={{"opacity":"0"}}/>
                    {/* <span className="sale-tag">5 Days Left</span>
                    <span className="normal-tag">{countDays(task.deadline)} Days Left</span> */}
                    {
                        task.status ?
                            <span className="new-tag">Completed </span>
                            :<></>
                    }
                </div>
                <div className="product-info">
                    <div className="icons">
                        <BsClipboard />
                    </div>
                    <span className="category">{task.socialPlatform}</span>
                    <h4 className="title" >
                        <Link to={`/task/${task._id}`}>{task.title}</Link>
                    </h4>

                    <div className="subTaskCount">{task.noOfsubTasks} SubTask(s)</div>
                    {
                        countDays(task.deadline) > 0 ?
                            <span>{countDays(task.deadline)} Day(s) Left</span>
                            : <span>Overdue by {-1 * countDays(task.deadline)} Days</span>
                    }
                </div>
            </div>
        </div >
    )
}

export default Task