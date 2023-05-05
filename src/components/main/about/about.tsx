import { FC } from "react";

import stylesAbout from "./about.module.css";

import { aboutText, achievmentsText } from "../../utils/data";

import { ArticleAbout } from "./article-about/article-about";

const About: FC = (): JSX.Element => {
  return (
    <section className={stylesAbout.container}>
      <ArticleAbout title={"О нас"} text={aboutText} />
      <div className={stylesAbout.stripe}></div>
      <ArticleAbout title={"Наши достижения"} text={achievmentsText} />
    </section>
  );
};

export { About };
