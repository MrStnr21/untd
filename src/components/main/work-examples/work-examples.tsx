import { FC } from "react";

import stylesWorkExamples from "./work-examples.module.css";

import { ExampleCard } from "./card/card";
import { ButtonScroll } from "../../ui/button-scroll/button-scroll";

import exampleImageOne from "../../../images/exampleImage-1.png";
import exampleImageTwo from "../../../images/exampleImage-2.png";
import exampleImageThree from "../../../images/exampleImage-3.png";

import { exampletext } from "../../utils/data";

import { Carousel } from "@trendyol-js/react-carousel";

const WorkExamples: FC = (): JSX.Element => {
  return (
    <section className={stylesWorkExamples.container}>
      <Carousel
        show={3}
        slide={1}
        transition={0.3}
        responsive={true}
        swiping={true}
        leftArrow={<ButtonScroll direction={"left"} />}
        rightArrow={<ButtonScroll direction={"right"} />}
        className={stylesWorkExamples.carousel}
      >
        <ExampleCard image={exampleImageOne} text={exampletext} />
        <ExampleCard image={exampleImageTwo} text={exampletext} />
        <ExampleCard image={exampleImageThree} text={exampletext} />
        <ExampleCard image={exampleImageOne} text={exampletext} />
        <ExampleCard image={exampleImageTwo} text={exampletext} />
        <ExampleCard image={exampleImageThree} text={exampletext} />
      </Carousel>
    </section>
  );
};

export { WorkExamples };
