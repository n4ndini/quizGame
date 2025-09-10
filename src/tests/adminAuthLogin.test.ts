import { adminAuthLogin } from "../auth/adminAuthLogin";
import { adminAuthRegister } from "../auth/adminAuthRegister";
import { clear } from "../other";

describe("Tests for adminAuthLogin", () => {
    beforeEach(() => {
        clear()
        adminAuthRegister("username", "password1", "nameFirst", "nameLast");
    });

    describe("Error Cases", () => {
        test("Case 1: username does not exist", () => {
            const output = adminAuthLogin("fakeuser", "password1");
            expect(output).toStrictEqual({
                error: expect.any(String)
            })
        });

        test("Case 2: password is incorrect", () => {
            const output = adminAuthLogin("username", "fakepassword");
            expect(output).toStrictEqual({
                error: expect.any(String)
            })
        });
    });

    describe("Success Cases", () => {
        test("Case 1: Successful login", () => {
            const output = adminAuthLogin("username", "password1");
            expect(output).toStrictEqual({
                authUserID: expect.any(Number)
            })
        });
    });
});
