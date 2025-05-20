import { Password } from "../value-objets/password";

describe("Password value object", () => {

it("should create valid password if it meets the requirements", () => {
    const password = Password.create("Password123");
    expect(password.value).toBe("Password123");
  });

  it("should throw error for less than 8 letters", () => {
    expect(() => {
      Password.create("hola");
    }).toThrow("Password must be at least 8 characters long");
  });

    it("should throw error if password is empty", () => {
    expect(() => {
      Password.create("");
    }).toThrow("Password cannot be empty");
  });

  it("should throw error if password does not meet complexity requirements", () => {
    expect(() => {
      Password.create("abcdefgh");
    }).toThrow("Password must contain at least one letter and one number");
  });

    it("should compare two identical password as true", () => {
      const password1 = Password.create("Password123");
      const password2 = Password.create("Password123");
      expect(password1.equals(password2)).toBe(true);
    });
   
});
