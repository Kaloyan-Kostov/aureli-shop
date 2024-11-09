import { DeliveryIcon, ShirtIcon, StellarIcon } from "../../helpers/icons";

const Header = () => {
  return (
    <>
      <div className="carousel w-full mb-1">
        <div
          id="slide1"
          className="carousel-item relative w-full flex items-center justify-center"
        >
          <div className="flex flex-col items-center justify-center text-center text-black">
            <DeliveryIcon className="mb-2" />
            <span className="italic">FREE DELIVERY over 80 BGN!</span>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div
          id="slide2"
          className="carousel-item relative w-full flex items-center justify-center"
        >
          <div className="flex flex-col  items-center justify-center text-center">
            <ShirtIcon />
            FALL'24 DROP 1 IS OUT. Check it out!
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div
          id="slide3"
          className="carousel-item relative w-full flex items-center justify-center"
        >
          <div className="flex flex-col items-center justify-center text-center">
            <StellarIcon />
            Otherworldly SWEATERS!
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div
          id="slide4"
          className="carousel-item relative w-full flex items-center justify-center"
        >
          <div className="flex flex-col items-center justify-center text-center">
            <DeliveryIcon className="mb-2" />
            <span className="italic">SOMETHING something SoMeThInG!</span>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>

      <hr className="mb-3" />

      {/* <div className="flex justify-between mx-6 my-3">
        <div className="flex items-center gap-1">
          <DeliveryIcon />
          <span className="italic">FREE DELIVERY over 80 BGN!</span>
        </div>

        <div className="flex items-center gap-1">
          <ShirtIcon />
          FALL'24 DROP 1 IS OUT.{" "}
          <span className="underline mx-1">Check it out!</span>
        </div>

        <div className="flex items-center gap-1">
          <StellarIcon />
          Otherworldly <span className="italic">SWEATERS!</span>
        </div>
      </div> */}
    </>
  );
};

export default Header;
