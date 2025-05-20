import { Email } from "../value-objets/email";

describe("Email", () => {
  it("should throw error for empty email", () => {
    expect(() => {
      Email.create("");
    }).toThrow("Email cannot be empty");
  });
});
