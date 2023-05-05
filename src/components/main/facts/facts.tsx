import { FC } from "react";

import stylesFacts from "./facts.module.css";

import { materialsText, experienceText, garantyText } from "../../utils/data";

import { ArticleFacts } from "./article-facts/article-facts";

import listIcon from "../../../images/list_icon.svg";
import pshikIcon from "../../../images/pshik_icon.svg";
import carIcon from "../../../images/car_icon.svg";
import carImage from "../../../images/facts_car.png";

import { Carousel } from "@trendyol-js/react-carousel";
import { ButtonScroll } from "../../ui/button-scroll/button-scroll";

const Facts: FC = (): JSX.Element => {
  return (
    <section className={stylesFacts.section}>
      <div className={stylesFacts.textContainer}>
        <ArticleFacts
          image={listIcon}
          title="материалы от лучших компаний"
          text={materialsText}
          dividerBottom
        />
        <ArticleFacts
          image={pshikIcon}
          title="опытные мастера"
          text={experienceText}
          dividerBottom
        />
        <ArticleFacts
          image={carIcon}
          title="Гарантия на все виды работы"
          text={garantyText}
        />
      </div>
      <div className={stylesFacts.examplesContainer}>
        <img
          className={stylesFacts.image  }
          src={carImage}
          alt="картинка"
        />
        <Carousel
          show={1}
          slide={1}
          transition={0.3}
          responsive={true}
          swiping={true}
          leftArrow={<ButtonScroll direction={"left"} />}
          rightArrow={<ButtonScroll direction={"right"} />}
          className={stylesFacts.carousel}
        >
          <p className={stylesFacts.carouselItem}>{materialsText}</p>
          <p className={stylesFacts.carouselItem}>{materialsText}</p>
          <p className={stylesFacts.carouselItem}>{materialsText}</p>
        </Carousel>
      </div>
    </section>
  );
};

export { Facts };
