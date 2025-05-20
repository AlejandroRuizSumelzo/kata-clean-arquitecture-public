import { UserName } from "../value-objets/username";

describe("UserName", () => {
  it("should create a valid username", () => {
    const username = UserName.create("John Doe");
    expect(username).toBeDefined();
    expect(username.value).toBe("John Doe");
  });

  it("should throw error for empty username", () => {
    expect(() => {
      UserName.create("");
    }).toThrow("User name cannot be empty");
  });

  it("should compare two identical usernames as equal", () => {
    const username1 = UserName.create("John Doe");
    const username2 = UserName.create("John Doe");
    expect(username1.equals(username2)).toBe(true);
  });

  it("should compare two different usernames as not equal", () => {
    const username1 = UserName.create("John Doe");
    const username2 = UserName.create("Jane Doe");
    expect(username1.equals(username2)).toBe(false);
  });
});
