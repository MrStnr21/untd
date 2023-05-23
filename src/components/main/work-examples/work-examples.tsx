import { FC } from "react";

import stylesWorkExamples from "./work-examples.module.css";

import { ExampleCard } from "./card/card";

import { ButtonScroll } from "../../ui/button-scroll/button-scroll";

import exampleImageOne from "../../../images/example-image/exampleImage-1.png";
import exampleImageTwo from "../../../images/example-image/exampleImage-2.png";
import exampleImageThree from "../../../images/example-image/exampleImage-3.png";

import { exampleText } from "../../utils/data";

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
        <ExampleCard image={exampleImageOne} text={exampleText} />
        <ExampleCard image={exampleImageTwo} text={exampleText} />
        <ExampleCard image={exampleImageThree} text={exampleText} />
        <ExampleCard image={exampleImageOne} text={exampleText} />
        <ExampleCard image={exampleImageTwo} text={exampleText} />
        <ExampleCard image={exampleImageThree} text={exampleText} />
      </Carousel>
    </section>
  );
};

export { WorkExamples };
