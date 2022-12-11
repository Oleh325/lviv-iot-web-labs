import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const RequireAuth = ({ allowedRoles }) => {
    const token = useSelector((state) => state.auth.token);
    const roles = useSelector((state) => state.auth.roles);
    const location = useLocation();

  return (
    roles?.find(role => allowedRoles?.includes(role))
        ? <Outlet />
        : token !== ""
            ? <Navigate to="/unauthorized" state={{ from: location }} replace />
            : <Navigate to="/login" state={{ from: location }} replace />
  )
}

export default RequireAuth