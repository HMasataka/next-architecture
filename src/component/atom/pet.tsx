import * as React from "react";

import { Pet as PetModel } from "@/domain/inventory/pet";

import { container } from "@/component/atom/pet.css";

type PetProps = {
  pet: PetModel;
};

const Pet: React.FC<PetProps> = ({ pet }) => {
  return (
    <div className={container}>
      <div>{pet.id}</div>
      <div>{pet.name}</div>
      <div>{pet.tag}</div>
    </div>
  );
};

export default Pet;
