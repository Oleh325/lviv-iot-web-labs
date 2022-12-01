export const setCredentials = (state, action) => {
    const { username, accessToken, roles } = action.payload;
    state.user = username;
    state.token = accessToken;
    state.roles = roles;
}

export const logOut = (state) => {
    state.user = "";
    state.token = "";
    state.roles = [];
}