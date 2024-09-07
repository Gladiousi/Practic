import { expect, test } from "vitest";

import { authUser } from "./main";

test("1. Empty fields", () => {
  expect(authUser("", "")).toBe("Invalid login or password length");
});

test("2. Fn without args", () => {
  expect(authUser()).toBe("Invalid login or password length");
});
test("3. Try login in banned user", () => {
  expect(authUser("Kirill", "123123321")).toBe("Kirill has been banned");
});
test("4. Wrong password", () => {
  expect(authUser("Danya", "123321123")).toBe("Unauthorized");
});

test("5. Correct login and password", () => {
  expect(authUser("ValidUser", "ValidPassword")).toBe("Success auth");
});

test("6. Login with special characters", () => {
  expect(authUser("User!@#$", "Pass!@#$")).toBe("Unauthorized");
});

test("7. Password with special characters", () => {
  expect(authUser("ValidUser", "Pass!@#$")).toBe("Success auth");
});

test("8. Login with spaces", () => {
  expect(authUser("User With Spaces", "ValidPassword")).toBe("Unauthorized");
});

test("9. Password with spaces", () => {
  expect(authUser("ValidUser", "Password With Spaces")).toBe("Unauthorized");
});

test("10. Login with numbers", () => {
  expect(authUser("ValidUser123", "ValidPassword")).toBe("Success auth");
});

test("11. Password with numbers", () => {
  expect(authUser("ValidUser", "Password123")).toBe("Success auth");
});

test("12. Login with mixed case", () => {
  expect(authUser("ValidUser", "ValidPassword")).toBe("Success auth");
});

test("13. Password with mixed case", () => {
  expect(authUser("ValidUser", "ValidPassword")).toBe("Success auth");
});

test("14. Login with minimum length", () => {
  expect(authUser("a", "ValidPassword")).toBe(
    "Invalid login or password length"
  );
});

test("15. Password with minimum length", () => {
  expect(authUser("ValidUser", "a")).toBe("Invalid login or password length");
});

test('16. Login with long length', () => {
  expect(authUser("ValidUserValidUserValidUser", "ValidPassword")).toBe(
    "Invalid login or password length"
  );
})

test('17. Password with long length', () => {
  expect(authUser("ValidUser", "ValidPasswordValidPasswordValidPassword")).toBe(
    "Invalid login or password length"
  );
})