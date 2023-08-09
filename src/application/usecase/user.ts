import { inject, singleton } from "tsyringe";
import type { IUserRepository } from "@/domain/repository/user";
import { UserRepository } from "@/repository/user";
import { User } from "@/domain/entity/user";

@singleton()
export class UserUseCase {
  constructor(
    @inject(UserRepository)
    private readonly userRepository: IUserRepository
  ) {}

  call(): void {
    this.userRepository.save(new User("John"));
  }
}
