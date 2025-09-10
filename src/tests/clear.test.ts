import { clear } from '../other';
import { getData } from '../data';
import { adminAuthRegister } from '../auth/adminAuthRegister';

describe('Test Suite for clear', () => {
  test('Case 1: Correct return type', () => {
    const output = clear();
    expect(output).toStrictEqual({});
  });

  test('Case 2: Correctly clears data', () => {
    adminAuthRegister('username', 'password123', 'First', 'Last');
    clear();
    const data = getData();
    expect(data.users).toEqual([]);
  });
});
