import { FC } from "react";

import stylesWorkExamples from "./work-examples.module.css";

import { ButtonScroll } from "../../ui/button-scroll/button-scroll";

const WorkExamples: FC = (): JSX.Element => {
  return (
    <section className={stylesWorkExamples.container}>
      <ButtonScroll direction={"left"} />
      <div className={stylesWorkExamples.sliderContainer}></div>
      <ButtonScroll direction={"right"} />
    </section>
  );
};

export { WorkExamples };
