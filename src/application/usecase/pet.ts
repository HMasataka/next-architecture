import { inject, singleton } from "tsyringe";
import type { IPetRepository } from "@/interface/repository/pet";
import { PetRepository } from "@/repository/pet";
import { Pet } from "@/domain/inventory/pet";
import { IPetUseCase } from "@/interface/usecase/pet";

@singleton()
export class PetUseCase implements IPetUseCase {
  constructor(
    @inject(PetRepository)
    private readonly petRepository: IPetRepository
  ) {}

  async create(): Promise<void> {
    return await this.petRepository.create();
  }

  async get(id: string): Promise<Pet> {
    const pet = await this.petRepository.get(id);
    return new Pet(pet.id, pet.name, pet.tag);
  }

  async list(limit?: number): Promise<Array<Pet>> {
    const pets = await this.petRepository.list(limit);

    var result: Array<Pet> = [];
    for (let i = 1; i < pets.length; i++) {
      result.push(new Pet(pets[i].id, pets[i].name, pets[i].tag));
    }

    return result;
  }
}
