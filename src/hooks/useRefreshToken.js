import { useDispatch, useSelector } from "react-redux";
import axios from "../api/axios";
import { authActions } from "../store/slices/authSlice";

const useRefreshToken = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);
    const roles = useSelector(state => state.auth.roles);
    

    const refresh = async () => {
        const response = await axios.get("/auth/refresh", {
            withCredentials: true
        });
        dispatch(authActions.setCredentials({ user, roles, token: response.data.accessToken }));
        return response.data.accessToken;
    }

    return refresh;
}

export default useRefreshToken;