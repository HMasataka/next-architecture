import { User } from "@/domain/entity/user";

export interface IUserRepository {
  save: (user: User) => void;
}
