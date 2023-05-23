import { FC } from "react";

import stylesArticleAbout from "./article-about.module.css";

import reactangles from "../../../../images/decoration/decoration_rect.svg";

interface IArticleAbout {
  title: string;
  text: string;
}

const ArticleAbout: FC<IArticleAbout> = ({ title, text }): JSX.Element => {
  return (
    <div className={stylesArticleAbout.articleContainer}>
      <h2 className={stylesArticleAbout.title}>{title}</h2>
      <img
        className={stylesArticleAbout.rect}
        src={reactangles}
        alt="разделитель"
      />
      <p className={stylesArticleAbout.text}>{text}</p>
    </div>
  );
};

export { ArticleAbout };
