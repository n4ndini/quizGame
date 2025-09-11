import { getData } from '../data';
import { AuthUserID, UserDetailsReturn } from '../types';

export function adminUserDetails(authUserID: AuthUserID): UserDetailsReturn {
  const data = getData();
  const user = data.users.find(u => u.authUserId === authUserID.authUserId);

  if (!user) {
    return { error: 'User not found' };
  }

  return {
    user: {
      authUserId: user.authUserId,
      name: user.name,
      username: user.username,
      quizzes: user.quizzes
    }
  };
}
