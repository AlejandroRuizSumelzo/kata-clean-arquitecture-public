import { Email } from "../value-objets/email";

describe("Email", () => {
  it("should throw error for empty email", () => {
    expect(() => {
      Email.create("");
    }).toThrow("Email cannot be empty");
  });

  it("should convert email to lowercase", () => {
    expect(() => {
      const email = Email.create("XURXODEV@TEST.COM");
      expect(email.value).toBe("xurxodev@test.com");
    });
  });

  it("should throw error for invalid email format", () => {
    expect(() => {
      Email.create("invalid-format-email");
    }).toThrow("Invalid email format");
  });

  it("should create a valid email", () => {
    const email = Email.create("test@test.com");
    expect(email.value).toBe("test@test.com");
  });
});
