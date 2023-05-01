import { FC } from "react";

import stylesArticle from "./article.module.css";

import reactangles from "../../../images/decoration_rect.svg";

interface IArticle {
  title: string;
  text: string;
}

const Article: FC<IArticle> = ({ title, text }): JSX.Element => {
  return (
    <div className={stylesArticle.articleContainer}>
      <h2 className={stylesArticle.title}>{title}</h2>
      <img className={stylesArticle.rect} src={reactangles} alt="разделитель" />
      <p className={stylesArticle.text}>{text}</p>
    </div>
  );
};

export { Article };
