import { useDispatch, useSelector } from "react-redux";
import axios from "../api/axios";
import { authActions } from "../store/slices/authSlice";

const useRefreshToken = () => {
    const dispatch = useDispatch();
    const prev = useSelector(state => state.auth);

    const refresh = async () => {
        const response = await axios.get("/auth/refresh", {
            withCredentials: true
        });
        dispatch(authActions.setCredentials({ prev, token: response.data.accessToken }));
        return response.data.accessToken;
    }

    return refresh;
}

export default useRefreshToken;