import Slider from "../Slider/Slider";
import Features from "../Features/Features";
import HalfPackges from "../HalfPackges/HalfPackges";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import Orders from "../Orders/Orders";
import useTitle from "../../hooks/useTitle";

const Home = () => {
  const { user } = useContext(AuthContext);
  useTitle("Home");
  return (
    <div className="mt-10">
      <Slider></Slider>
      <Features></Features>
      <HalfPackges></HalfPackges>
      {user?.email && <Orders></Orders>}
    </div>
  );
};

export default Home;
