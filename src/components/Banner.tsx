import Hero from "./hero/Hero";
import Navbar from "./navbar/Navbar";

const Banner = () => {
  return (
    <div className="lg:px-24 px-10">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Banner;
