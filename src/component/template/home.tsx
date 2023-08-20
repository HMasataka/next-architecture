import Pets from "@/component/molecule/pets";
import { Pet as PetModel } from "@/domain/inventory/pet";

export type HomeProps = {
  pets: PetModel[];
};

const Home: React.FC<HomeProps> = (props: HomeProps) => {
  return <Pets pets={props.pets} />;
};

export default Home;
