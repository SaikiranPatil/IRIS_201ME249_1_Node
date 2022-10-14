import React from 'react'
import {MdOutlineAssignment} from 'react-icons/md'
import { formatDate } from '../../Utils/utils'
import './SubTask.css'

const SubTask = ({subTask}) => {
    console.log(subTask)
    return (
        subTask && <div className="single-review">
            <MdOutlineAssignment />
            <div className="review-info">
                <h4>
                    {subTask.subTaskTitle}
                    <span>{subTask.status ? "Completed" : formatDate(subTask.deadline)}</span>
                </h4>
                <p>
                    {subTask.description}
                </p>
            </div>
        </div>
    )
}

export default SubTask