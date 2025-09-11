import { adminUserDetails } from "../auth/adminUserDetails";
import { adminAuthRegister } from "../auth/adminAuthRegister";
import { clear } from "../other"
import { adminAuthLogin } from "../auth/adminAuthLogin";
import { log } from "console";

describe("Tests for adminUserDetails", () => {
    beforeEach(() =>  {
        clear();
        adminAuthRegister("username", "password1", "first", "last");
    });
    describe("Error Cases", () => {
        test("Case 1: authUserId does not exist", () => {
            const output = adminUserDetails({authUserId: -1});
            expect(output).toStrictEqual({
                error: expect.any(String)
            });
        });
    });

    describe("Success Cases", () => {
        test("Case 1: Successfully retrieves user details", () => {
            const login = adminAuthLogin("username", "password1");
            if ("error" in login) {
              throw new Error(`Login failed in setup: ${login.error}`);
            }

            const output = adminUserDetails(login);

            expect(output).toStrictEqual({
                user: {
                    authUserId: login.authUserId,
                    name: expect.any(String),
                    username: expect.any(String),
                    quizzes: [],
                }
            })
        });
    });
});