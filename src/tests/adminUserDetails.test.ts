import { adminUserDetails } from "../auth/adminUserDetails";
import { adminAuthRegister } from "../auth/adminAuthRegister";
import { clear } from "../other"
import { adminAuthLogin } from "../auth/adminAuthLogin";

describe("Tests for adminUserDetails", () => {
    beforeEach(() =>  {
        clear();
        adminAuthRegister("username", "password1", "first", "last");
    });
    describe("Error Cases", () => {
        test("Case 1: authUserId does not exist", () => {
            let authUserID = -1;
            const output = adminUserDetails(authUserID);
            expect(output).toStrictEqual({
                error: expect.any(String)
            });
        });
    });

    describe("Success Cases", () => {
        test("Case 1: Successfully retrieves user details", () => {
            const id = adminAuthLogin("username", "password1");
            const output = adminUserDetails(id);
        });
    });
});