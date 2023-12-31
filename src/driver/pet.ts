import { inject, singleton } from "tsyringe";

import {
  PetsApi,
  Pet,
  ListPetsRequest,
  ShowPetByIdRequest,
} from "@/autogenerated";
import { IPetDriver } from "@/interface/driver/pet";

@singleton()
export class PetDriver implements IPetDriver {
  constructor(
    @inject("PetApi")
    private readonly petAPI: PetsApi
  ) {}

  async create(): Promise<void> {
    return await this.petAPI.createPets();
  }

  get(req: ShowPetByIdRequest): Promise<Pet> {
    return this.petAPI.showPetById(req);
  }

  list(req: ListPetsRequest): Promise<Array<Pet>> {
    return this.petAPI.listPets(req);
  }
}
