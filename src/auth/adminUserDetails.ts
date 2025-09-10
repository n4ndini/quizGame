import { AuthUserID, UserDetailsReturn } from '../types';

export function adminUserDetails(authUserID: AuthUserID): UserDetailsReturn {
  return {
    user: {
      authUserId: 1,
      name: 'userName',
      username: 'username',
      quizzes: []

    }
  };
}
