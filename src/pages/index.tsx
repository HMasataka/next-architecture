import React, { useEffect, useState } from "react";

import { petUseCase } from "@/di/di";
import { Pet } from "@/domain/inventory/pet";

import Home, { HomeProps } from "@/component/template/home";

const useHomeProps = (): HomeProps => {
  const [pets, setPets] = useState<Pet[]>([]);

  useEffect(() => {
    (async () => {
      setPets(await petUseCase.list());
    })();
  }, []);

  return {
    pets: pets,
  };
};

const Container: React.FC = ({}) => {
  const props = useHomeProps();
  return <Home {...props} />;
};

export default Container;
