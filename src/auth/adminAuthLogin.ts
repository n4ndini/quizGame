import { getData } from '../data';
import { UserLoginReturn } from '../types';

export function adminAuthLogin(username: string, password: string): UserLoginReturn {
  const data = getData();

  const user = data.users.find(user => user.username === username);
  if (!user) {
    return { error: 'Username not found' };
  }

  if (password !== user.password) {
    return { error: 'Password is incorrect' };
  }

  return { authUserId: user.authUserId };
}
