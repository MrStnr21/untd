import { FC } from "react";

import stylesArticleFacts from "./article-facts.module.css";

import reactangles from "../../../../images/decoration/decoration_rect.svg";

interface IArticleFacts {
  image: string;
  title: string;
  text: string;
  dividerBottom?: boolean;
}

const ArticleFacts: FC<IArticleFacts> = ({
  image,
  title,
  text,
  dividerBottom,
}): JSX.Element => {
  return (
    <div className={stylesArticleFacts.articleContainer}>
      <div className={stylesArticleFacts.titleContainer}>
        <img className={stylesArticleFacts.image} src={image} alt="список" />
        <h2 className={stylesArticleFacts.title}>{title}</h2>
      </div>
      <p className={stylesArticleFacts.text}>{text}</p>
      {dividerBottom ? (
        <img
          className={stylesArticleFacts.divider}
          src={reactangles}
          alt="разделитель"
        />
      ) : null}
    </div>
  );
};

export { ArticleFacts };
