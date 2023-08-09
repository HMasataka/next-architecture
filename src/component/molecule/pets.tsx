import * as React from "react";

import Pet from "@/component/atom/pet";
import { Pet as PetModel } from "@/domain/inventory/pet";

type PetsProps = {
  pets: PetModel[];
};

const Pets: React.FC<PetsProps> = ({ pets }) => {
  return (
    <>
      {pets.map((pet) => (
        <Pet key={pet.id} pet={pet} />
      ))}
    </>
  );
};

export default Pets;
