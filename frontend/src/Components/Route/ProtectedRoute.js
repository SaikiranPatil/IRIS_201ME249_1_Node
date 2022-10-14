import React from 'react'
import { Navigate, Route } from 'react-router-dom';
import { useSelector } from "react-redux";

const ProtectedRoute = ({ isAdmin, component: Component, ...rest }) => {
    const { isAuthenticated, user, loading } = useSelector(state => state.user);

    return (
        <>
            {
                (
                    <Route
                        {...rest}
                        render={(props) => {
                            return (!isAuthenticated || (isAdmin && user.role !== 'admin')) ? <Navigate to="/login" /> : <Component {...props} />
                        }}
                    />
                )
            }
        </>
    )
}

export default ProtectedRoute