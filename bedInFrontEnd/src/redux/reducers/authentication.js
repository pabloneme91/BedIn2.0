export function authentication (state={}, action) {
  switch(action.type) {
    case 'LOG_IN_USER':
      return Object.assign({}, state, {isPostingToServer: true});
    case 'USER_IS_LOGGED_IN':
      return Object.assign({}, state, {
        isPostingToServer: false,
        isLoggedIn: true,
      });
    case 'USER_FAILED_TO_LOG_IN':
      return Object.assign({}, state, {
        isPostingToServer: false,
        isLoggedIn: false
      });
    case 'FAILED_POST':
      return Object.assign({}, state, {
        isPostingToServer: false,
        error: action.err
      });
    default:
      return state;
  }
  return state;
}
