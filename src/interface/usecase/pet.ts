import { Pet } from "@/domain/inventory/pet";

export interface IPetUseCase {
  create: () => void;
  get: (id: string) => Promise<Pet>;
  list: (limit?: number) => Promise<Array<Pet>>;
}
