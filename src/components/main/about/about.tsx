import { FC } from "react";

import stylesAbout from "./about.module.css";

import { aboutText, achievmentsText } from "../../utils/data";

import { Article } from "../../ui/article/article";

const About: FC = (): JSX.Element => {
  return (
    <section className={stylesAbout.container}>
      <Article title={"О нас"} text={aboutText} />
      <div className={stylesAbout.stripe}></div>
      <Article title={"Наши достижения"} text={achievmentsText} />
    </section>
  );
};

export { About };
