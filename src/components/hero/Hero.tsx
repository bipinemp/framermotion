import HeroFirst from "./HeroFirst";
import HeroSecond from "./HeroSecond";

const Hero = () => {
  return (
    <div className="relative flex flex-col gap-10">
      <HeroFirst />
      <HeroSecond />
    </div>
  );
};

export default Hero;
