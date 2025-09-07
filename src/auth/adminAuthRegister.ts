import { UserRegisterReturn } from '../types';

export function adminAuthRegister(username: string, password: string, nameFirst: string, nameLast: string): UserRegisterReturn {
  return { authUserID: 1 };
}
