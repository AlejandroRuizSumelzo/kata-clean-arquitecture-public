import { Email } from "../email";

describe("Email", () => {
  it("should create a valid email", () => {
    const email = Email.create("test@test.com");
    expect(email.value).toBe("test@test.com");
  });

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

  it("should compare two identical emails as true", () => {
    const email1 = Email.create("test@test.com");
    const email2 = Email.create("test@test.com");
    expect(email1.equals(email2)).toBe(true);
  });

  it("should compare two different emails as false", () => {
    const email1 = Email.create("test@test.com");
    const email2 = Email.create("example@test.com");
    expect(email1.equals(email2)).toBe(false);
  });
});
