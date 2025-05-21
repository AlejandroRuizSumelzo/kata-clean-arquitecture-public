import { UserMock } from "../../../../data/mocks/user-mock";
import { User } from "../../../entities/user";
import { UserRepository } from "../../../repository/user-repository";
import { SaveUserUseCase } from "../save-user-use-case";

const mockUserRepository: UserRepository = {
  getUsers: jest.fn(),
  saveUser: jest.fn(),
  getUserByEmail: jest.fn(),
};

describe("SaveUserUseCase", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should save successfully a new valid user", async () => {
    const testUser = User.create("John Doe", "john@example.com", "Password123");
    (mockUserRepository.getUserByEmail as jest.Mock).mockResolvedValue(null);
    (mockUserRepository.saveUser as jest.Mock).mockResolvedValue(undefined);

    const useCase = new SaveUserUseCase(mockUserRepository);
    await useCase.execute(testUser);

    expect(mockUserRepository.getUserByEmail).toHaveBeenCalledWith(
      testUser.email
    );
    expect(mockUserRepository.saveUser).toHaveBeenCalledWith(testUser);
  });
});
