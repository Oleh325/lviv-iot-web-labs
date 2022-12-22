import { axiosPrivate } from "../api/axios";
import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/slices/authSlice";

const useAxiosPrivate = () => {
    const refresh = useRefreshToken();
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        const requestIntercept = axiosPrivate.interceptors.request.use(
            config => {
                if (!config.headers["Authorization"]) {
                    config.headers["Authorization"] = `Bearer ${auth?.token}`;
                }
                return config;
            },
            (error) => Promise.reject(error)
        );
        const responseIntercept = axiosPrivate.interceptors.response.use(
            response => response,
            async (error) => {
                const prevRequest = error?.config;
                console.log(error);
                if (error?.response?.data?.message === "Token has expired!" && !prevRequest?.sent) {
                    prevRequest.sent = true;
                    const newAccessToken = await refresh();
                    prevRequest.headers = { ...prevRequest.headers };
                    prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
                    return axiosPrivate(prevRequest);
                } else if (error?.response?.data?.message === "Refresh token has expired!" ||
                           error?.response?.data?.message === "There's no refresh token!") {
                    dispatch(authActions.logOut());
                }
                return Promise.reject(error);
            }
        );

        return () => {
            axiosPrivate.interceptors.request.eject(requestIntercept);
            axiosPrivate.interceptors.response.eject(responseIntercept);
        }
    }, [auth, refresh, dispatch]);

    return axiosPrivate;
}

export default useAxiosPrivate;