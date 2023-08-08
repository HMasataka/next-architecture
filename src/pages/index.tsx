import React, { useEffect } from "react";

import { container } from "tsyringe";
import { UserUseCase } from "@/application/usecase/user";

const Home: React.FC = ({}) => {
  useEffect(() => {
    const userUseCase = container.resolve<UserUseCase>(UserUseCase);
    userUseCase.call();
  }, []);

  return <></>;
};

export default Home;
