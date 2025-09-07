import { UserLoginReturn } from '../types';

export function adminAuthLogin(username: string, password: string): UserLoginReturn {
  return { authUserID: 1 };
}
