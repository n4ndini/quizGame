import { User, UserRegisterReturn } from '../types';
import { validatePassword, validateUsername, validatetName } from '../../helpers';
import { getData, setData } from '../data';

export function adminAuthRegister(username: string, password: string, nameFirst: string, nameLast: string): UserRegisterReturn {
  const data = getData();
  if (validatetName(nameFirst) !== true) {
    return { error: `${validatetName(nameFirst)}` };
  }

  if (validatetName(nameLast) !== true) {
    return { error: `${validatetName(nameLast)}` };
  }

  if (validatePassword(password) !== true) {
    return { error: `${validatePassword(password)}` };
  }

  if (validateUsername(username, data) !== true) {
    return { error: `${validateUsername(username, data)}` };
  }

  const authUserId = Math.floor(Math.random() * 1000);

  const user: User = {
    authUserId: authUserId,
    name: `${nameFirst} ${nameLast}`,
    username: `${username}`,
    password: `${password}`,
    quizzes: []
  };

  data.users.push(user);

  setData(data);

  return { authUserID: authUserId };
}
