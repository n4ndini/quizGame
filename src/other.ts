import { getData } from './data';

export function clear() {
  const data = getData();

  data.users = [];

  return {};
}
