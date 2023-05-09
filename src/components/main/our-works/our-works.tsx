import { FC } from "react";

import stylesOurWorks from "./our-works.module.css";

import { Title } from "../../ui/title/title";

import { arrImage } from "../../utils/dataImg";

const OurWorks: FC = (): JSX.Element => {
  const test = arrImage[0];

  console.log(test);

  return (
    <section className={stylesOurWorks.section}>
      <Title text="Наши работы" />
      <ul className={stylesOurWorks.imageContainer}>
        {arrImage
          ? arrImage.map((item) => {
              return (
                <li key={item.id} className={stylesOurWorks.imageItem}>
                  <img className={stylesOurWorks.image} src={item.image} alt={item.alt} />
                </li>
              );
            })
          : null}
      </ul>
    </section>
  );
};

export { OurWorks };
