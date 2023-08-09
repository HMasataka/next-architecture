import { singleton, inject } from "tsyringe";

import { Pet } from "@/domain/entity/pet";
import { IPetRepository } from "@/interface/repository/pet";
import type { IPetDriver } from "@/interface/driver/pet";
import { PetDriver } from "@/driver/pet";

@singleton()
export class PetRepository implements IPetRepository {
  constructor(
    @inject(PetDriver)
    private readonly petDriver: IPetDriver
  ) {}

  async create(): Promise<void> {
    return await this.petDriver.create();
  }

  async get(id: string): Promise<Pet> {
    const pet = await this.petDriver.get({ petId: id });
    return new Pet(pet.id, pet.name, pet.tag);
  }

  async list(limit?: number): Promise<Array<Pet>> {
    const pets = await this.petDriver.list({ limit: limit });

    var result: Array<Pet> = [];
    for (let i = 1; i < pets.length; i++) {
      result.push(new Pet(pets[i].id, pets[i].name, pets[i].tag));
    }

    return result;
  }
}
