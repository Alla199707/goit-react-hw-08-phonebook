export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUserName = state => state.auth.user.name;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectUserEmail = state => state.auth.user.email;

const authSelectors = {
  selectIsLoggedIn,
  selectUserName,
  selectIsRefreshing,
  selectUserEmail,
};

export default authSelectors;
