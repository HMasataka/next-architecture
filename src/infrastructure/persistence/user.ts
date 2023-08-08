import { singleton } from "tsyringe";

import { User } from "@/domain/entity/user";
import { IUserRepository } from "@/domain/repository/user";

@singleton()
export class UserPersistence implements IUserRepository {
  save(user: User) {
    console.log(`Saved ${user.name}!`);
  }
}
