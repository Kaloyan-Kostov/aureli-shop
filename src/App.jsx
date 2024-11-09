import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import banner from "./assets/banner.png";
import banner2 from "./assets/banner2.png";
import sweat1 from "./assets/sweat1.png";
import sweat2 from "./assets/sweat2.png";
import sweat3 from "./assets/sweat3.png";
export default function App() {
  return (
    <>
      <Header />
      <Navbar />

      <img src={banner2} alt="" className="rounded-xl w-[1300px]" />
      <br />
      <div className="flex gap-6 justify-between">
        <img
          src={sweat1}
          alt=""
          className="rounded-3xl max-w-[400px] max-h-[400px]"
        />
        <img
          src={sweat2}
          alt=""
          className="rounded-3xl  max-w-[400px] max-h-[400px]"
        />
        <img
          src={sweat3}
          alt=""
          className="rounded-3xl  max-w-[400px] max-h-[400px]"
        />
      </div>
    </>
  );
}
