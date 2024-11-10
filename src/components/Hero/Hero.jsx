import banner from "../../assets/img/banner.png";
import sweat1 from "../../assets/img/sweat1.png";
import sweat2 from "../../assets/img/sweat2.png";
import sweat3 from "../../assets/img/sweat3.png";

const Hero = () => {
  return (
    <div>
      <div className="w-full">
        <img src={banner} alt="" className="rounded-xl w-[1300px]" />
        <br />
        <div className="flex gap-6 justify-between">
          <img
            src={sweat1}
            alt=""
            className="rounded-3xl md:max-w-[400px] md:max-h-[400px]"
          />
          <img
            src={sweat2}
            alt=""
            className="rounded-3xl  md:max-w-[400px] md:max-h-[400px]"
          />
          <img
            src={sweat3}
            alt=""
            className="rounded-3xl  md:max-w-[400px] md:max-h-[400px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
