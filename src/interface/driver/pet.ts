import { Pet, ListPetsRequest, ShowPetByIdRequest } from "@/autogenerated";

export interface IPetDriver {
  create: () => Promise<void>;
  get: (req: ShowPetByIdRequest) => Promise<Pet>;
  list: (req: ListPetsRequest) => Promise<Array<Pet>>;
}
