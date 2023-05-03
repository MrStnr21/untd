import { FC } from "react";

import stylesWorkExamples from "./work-examples.module.css";

import { ExampleCard } from "./card/card";
import { ButtonScroll } from "../../ui/button-scroll/button-scroll";

import exampleImageOne from "../../../images/exampleImage-1.png";
import exampleImageTwo from "../../../images/exampleImage-2.png";
import exampleImageThree from "../../../images/exampleImage-3.png";

import { exampletext } from "../../utils/data";

const WorkExamples: FC = (): JSX.Element => {
  return (
    <section className={stylesWorkExamples.container}>
      <ButtonScroll direction={"left"} />
      <div className={stylesWorkExamples.sliderContainer}>

        <ExampleCard image={exampleImageOne} text={exampletext} />
        <ExampleCard image={exampleImageTwo} text={exampletext} />
        <ExampleCard image={exampleImageThree} text={exampletext} />
        <ExampleCard image={exampleImageOne} text={exampletext} />
        <ExampleCard image={exampleImageTwo} text={exampletext} />
        <ExampleCard image={exampleImageThree} text={exampletext} />

      </div>
      <ButtonScroll direction={"right"} />
    </section>
  );
};

export { WorkExamples };
