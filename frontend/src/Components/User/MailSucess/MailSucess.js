import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMail } from 'react-icons/ai';

const MailSucess = () => {
    return (
        <div className="maill-success">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="success-content">
                            <AiOutlineMail size="3rem" color="#0167f3" />
                            <h2>Your Mail Sent Successfully</h2>
                            <p>Thanks for contacting with us, We will get back to you asap.</p>
                            <div className="button">
                                <Link to="/" className="btn">
                                    Back to Home
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MailSucess
