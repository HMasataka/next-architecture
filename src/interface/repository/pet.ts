import { Pet } from "@/domain/entity/pet";

export interface IPetRepository {
  create: () => Promise<void>;
  get: (id: string) => Promise<Pet>;
  list: (limit?: number) => Promise<Array<Pet>>;
}
