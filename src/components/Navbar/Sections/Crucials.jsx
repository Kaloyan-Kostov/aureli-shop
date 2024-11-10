import { useParams } from "react-router-dom";
import g1 from "../../../assets/img/gold/g1.png";
import g2 from "../../../assets/img/gold/g2.png";
import g3 from "../../../assets/img/gold/g3.png";
import g4 from "../../../assets/img/gold/g4.png";
import g5 from "../../../assets/img/gold/g5.png";
import g6 from "../../../assets/img/gold/g6.png";
import g7 from "../../../assets/img/gold/g7.png";
import g8 from "../../../assets/img/gold/g8.png";
import g9 from "../../../assets/img/gold/g9.png";
import p1 from "../../../assets/img/thyst/p1.png";
import p2 from "../../../assets/img/thyst/p2.png";
import p3 from "../../../assets/img/thyst/p3.png";

const sections = [
  {
    name: "Jade",
    img: [],
  },
  {
    name: "Gold",
    img: [g1, g2, g3, g4, g5, g6, g7, g8, g9],
  },
  {
    name: "Thyst",
    img: [p1, p2, p3],
  },
];

const Crucials = () => {
  const { labelName } = useParams();

  const currentSection = sections.find((section) =>
    section.name.toLocaleLowerCase().includes(labelName)
  );

  return (
    <div className="flex flex-col items-center justify-between">
      <div className="">
        <h1>CRUCIALS.</h1>
        <h2>
          Discover the{" "}
          {currentSection ? currentSection.name : "Collection Not Found"}{" "}
          collection
        </h2>
      </div>

      <div className="grid grid-cols-3 gap-6 my-4 pt-32">
        {currentSection ? (
          currentSection.img.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${currentSection.name} ${index + 1}`}
              className="rounded-lg max-w-[400px]"
            />
          ))
        ) : (
          <p>
            No images available for{" "}
            {currentSection ? currentSection.name : "this"}.
          </p>
        )}
      </div>
    </div>
  );
};

export default Crucials;
