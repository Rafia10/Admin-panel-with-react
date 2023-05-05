// authActions.js
export const login = (user: any) => ({
  type: "LOGIN",
  payload: user,
});
export const changePass = ({ password, newPass }) => ({
  type: "CHANGE_PASS",
  payload: {
    password,
    newPass,
  },
});
export const login_failure = (user: any) => ({
  type: "LOGIN_FAILED",
  payload: user,
});
export const logout = () => ({
  type: "LOGOUT",
});
