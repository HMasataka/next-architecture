import { inject, singleton } from "tsyringe";
import type { IUserRepository } from "@/domain/repository/user";
import { UserPersistence } from "@/infrastructure/persistence/user";
import { User } from "@/domain/entity/user";

@singleton()
export class UserUseCase {
  constructor(
    @inject(UserPersistence)
    private readonly userRepository: IUserRepository
  ) {}

  call(): void {
    this.userRepository.save(new User("John"));
  }
}
