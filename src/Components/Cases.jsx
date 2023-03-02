import React from "react";
import { RightArrow } from "../assets/RightArrow";
import { LeftArrow } from "../assets/LeftArrow";
import Image_1 from "../assets/image_1.png";
import Image_2 from "../assets/image_2.png";
import Image_3 from "../assets/image_3.png";

const caseStudies = [
  {
    id: 1,
    subtitle: "Curology",
    title: "A custom formula for your skin's unique needs",
    img: Image_1,
  },
  {
    id: 2,
    subtitle: "Yourspace",
    title: "Open space floor plans for you next venture",
    img: Image_2,
  },
  {
    id: 3,
    subtitle: "Lumin",
    title: "For your best look ever",
    img: Image_3,
  },
];

export default function Cases() {
  return (
    <section className="cases">
      <div className="container-fluid">
        <div className="cases-navigation">
          <div className="cases-arrow prev disabled">
            <LeftArrow />
          </div>
          <div className="cases-arrow next">
            <RightArrow />
          </div>
        </div>
        <div className="row">
          {caseStudies.map((caseItem) => (
            <div className="case" key={caseItem.id}>
              <div className="caseDetails">
                <span>{caseItem.subtitle}</span>
                <h2>{caseItem.title}</h2>
              </div>
              <div className="case-image">
                <img
                  //   src={require(`../assets/${caseItem.img}.png`)}
                  src={caseItem.img}
                  alt={caseItem.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
