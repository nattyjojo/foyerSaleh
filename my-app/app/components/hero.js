import LargeButton from "./buttonLarge";
const Hero = () => {
  //const currentTime = currentTime();
  return (
    <h1>
      WELLCOME TO BOYER FLASHTO HOME TO ALL,
      <br></br>
      <br></br>
      <LargeButton link={"/about"} content={"Learn More"} />
    </h1>
  );
};
export default Hero;
