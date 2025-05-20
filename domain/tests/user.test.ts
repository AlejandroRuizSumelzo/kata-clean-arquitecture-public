import { User } from "../entities/user";

describe("User", () => {
  it("should create a valid user with all required fields", () => {
    const user = User.create(
      "Xurxo Dev",
      "xurxodev@example.com",
      "Password123"
    );
    expect(user.name.value).toBe("Xurxo Dev");
    expect(user.email.value).toBe("xurxodev@example.com");
    expect(user.password.value).toBe("Password123");
  });

  it("should throw error when creating user with invalid email", () => {
    expect(() => {
      User.create("Xurxo Dev", "invalid-email", "Password123");
    }).toThrow("Invalid email format");
  });

  it("should throw error when creating user with invalid password", () => {
    expect(() => {
      User.create("Xurxo Dev", "xurxodev@example.com", "pass");
    }).toThrow("Password must be at least 8 characters long");
  });

  it("should throw error when creating user with empty name", () => {
    expect(() => {
      User.create("", "xurxodev@example.com", "Password123");
    }).toThrow("User name cannot be empty");
  });

  it("should compare two users with same id as equal", () => {
    const id = "same-id-123";
    const user1 = User.create(
      "Xurxo Dev",
      "xurxodev@example.com",
      "Password123",
      id
    );
    const user2 = User.create(
      "Different Name",
      "different@example.com",
      "DifferentPass123",
      id
    );
    expect(user1.equals(user2)).toBe(true);
  });

  it("should compare two users with different ids as not equal", () => {
    const user1 = User.create(
      "Xurxo Dev",
      "xurxodev@example.com",
      "Password123",
      "id-1"
    );
    const user2 = User.create(
      "Xurxo Dev",
      "xurxodev@example.com",
      "Password123",
      "id-2"
    );
    expect(user1.equals(user2)).toBe(false);
  });
});
