import { FC } from "react";

import stylesSocialMedia from "./social-media.module.css";

interface ISocialMedia {
  image: string;
  alt: string;
}

const SocialMedia: FC<ISocialMedia> = ({ image, alt }): JSX.Element => {
  return (
    <div className={stylesSocialMedia.container}>
      <img className={stylesSocialMedia.image} src={image} alt={alt} />
    </div>
  );
};

export { SocialMedia };
