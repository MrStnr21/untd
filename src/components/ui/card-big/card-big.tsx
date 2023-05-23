import { FC } from "react";

import stylesCardBig from "./card-big.module.css";

import { Carousel } from "@trendyol-js/react-carousel";

import { ButtonScroll } from "../button-scroll/button-scroll";

import { TCardBig } from "../../../services/types/data";

interface ICardBig {
  image: string;
  textArr: TCardBig[];
}

const CardBig: FC<ICardBig> = ({ image, textArr }): JSX.Element => {
  return (
    <div className={stylesCardBig.examplesContainer}>
      <img className={stylesCardBig.image} src={image} alt="картинка" />
      {textArr.length > 1 ? (
        <Carousel
          show={1}
          slide={1}
          transition={0.3}
          responsive={true}
          swiping={true}
          leftArrow={<ButtonScroll direction={"left"} />}
          rightArrow={<ButtonScroll direction={"right"} />}
          className={stylesCardBig.carousel}
        >
          {textArr.map((item) => {
            return <p className={stylesCardBig.carouselItem}>{item.text}</p>;
          })}
        </Carousel>
      ) : null}
    </div>
  );
};

export { CardBig };
