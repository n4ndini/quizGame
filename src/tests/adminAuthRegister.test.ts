import { adminAuthRegister } from '../auth/adminAuthRegister';
import { clear } from '../other';

describe('Tests for adminAuthRegister', () => {
//   beforeEach(() => {
//     clear();
//   });

  describe('Error cases: ', () => {
    test('Case 1: nameFirst too short', () => {
      const output = adminAuthRegister('username', 'password', 'a', 'nameLast');
      expect(output).toStrictEqual({
        error: expect.any(String)
      });
    });

    test('Case 2: nameFirst too long', () => {
      const output = adminAuthRegister('username', 'password', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'nameLast');
      expect(output).toStrictEqual({
        error: expect.any(String)
      });
    });

    test('Case 3: nameFirst contains invalid characters', () => {
      const output = adminAuthRegister('username', 'password', 'nameFirst1', 'nameLast');
      expect(output).toStrictEqual({
        error: expect.any(String)
      });
    });

    test('Case 4: nameLast too short', () => {
      const output = adminAuthRegister('username', 'password', 'nameFirst', 'a');
      expect(output).toStrictEqual({
        error: expect.any(String)
      });
    });

    test('Case 5: nameLast too long', () => {
      const output = adminAuthRegister('username', 'password', 'nameFirst', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
      expect(output).toStrictEqual({
        error: expect.any(String)
      });
    });

    test('Case 6: nameLast contains invalid characters', () => {
      const output = adminAuthRegister('username', 'password', 'nameFirst', 'nameLast1');
      expect(output).toStrictEqual({
        error: expect.any(String)
      });
    });

    test('Case 7: password too short', () => {
      const output = adminAuthRegister('username', 'abc123', 'nameFirst', 'nameLast');
      expect(output).toStrictEqual({
        error: expect.any(String)
      });
    });

    test('Case 8: password has no numbers', () => {
      const output = adminAuthRegister('username', 'abcdefghi', 'nameFirst', 'nameLast');
      expect(output).toStrictEqual({
        error: expect.any(String)
      });
    });

    test('Case 9: password has no letters', () => {
      const output = adminAuthRegister('username', '123456789', 'nameFirst', 'nameLast');
      expect(output).toStrictEqual({
        error: expect.any(String)
      });
    });

    test('Case 10: username contains invalid characters', () => {
      const output = adminAuthRegister('username`', 'password1', 'nameFirst', 'nameLast');
      expect(output).toStrictEqual({
        error: expect.any(String)
      });
    });

    test('Case 11: username already in use', () => {
      adminAuthRegister('username', 'password1', 'nameFirst', 'nameLast');
      const output = adminAuthRegister('username', 'password1', 'nameFirst', 'nameLast');
      expect(output).toStrictEqual({
        error: expect.any(String)
      });
    });
  });

  describe('Success cases: ', () => {
    test.only('Case 1: Successfully creates user', () => {
      const output = adminAuthRegister('username', 'password1', 'nameFirst', 'nameLast');
      expect(output).toStrictEqual({ authUserID: expect.any(Number) });
    });
  });
});
