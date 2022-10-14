import React, { useEffect } from 'react'
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaUserCircle } from 'react-icons/fa';
import { TbSubtask } from 'react-icons/tb';
import { BiTask } from 'react-icons/bi';
import './Profile.css'
import Loading from '../../Utils/Loading/Loading';

const Profile = () => {
    const navigate = useNavigate();
    const { user, loading } = useSelector(state => state.user);

    const capitalizeFirstLetter = (string) => {
        if (!string) return
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    if (!user) return;


    return (
        <>{
            loading ?
                <Loading /> :
                <>
                    <section className="item-details section">
                        <div className="container">
                            <div className="top-area">
                                <div className="row align-items-center">
                                    <div className="col-lg-6 col-md-12 col-12">
                                        <div className="product-images">
                                            <main id="gallery">
                                                <div className="main-img">
                                                    <FaUserCircle size="15rem" color="#999" />
                                                </div>
                                            </main>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-12">
                                        <div className="product-info">
                                            <h2 className="title">{capitalizeFirstLetter(user.name)}</h2>
                                            <p className="info-text">
                                                {
                                                    user.club ? user.club + ": " + user.role : "New User"
                                                }
                                            </p>
                                            <div className="bottom-content">
                                                <div className="row align-items-end">
                                                    <div className="col-lg-4 col-md-4 col-12">
                                                        <div className="button cart-button">
                                                            <button className="btn" style={{ width: "100%" }} onClick={() => navigate("/tasks/subtasks")}>
                                                                <TbSubtask size="1.2rem" />
                                                                My Sub-Tasks
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4 col-12">
                                                        <div className="wish-button">
                                                            <button className="btn" onClick={() => navigate("/")}>
                                                                <BiTask size="1.2rem" /> Our Tasks
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4 col-12">
                                                        <div className="wish-button">
                                                            <button className="btn">
                                                                Edit Profile
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
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

export default Profile
