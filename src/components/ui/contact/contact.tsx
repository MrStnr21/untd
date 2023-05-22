import { FC } from "react";

import stylesContact from "./contact.module.css";

interface IContact {
  image: string;
  alt: string;
  text: string;
}

const Contact: FC<IContact> = ({ image, alt, text }): JSX.Element => {
  return (
    <div className={stylesContact.container}>
      <img className={stylesContact.image} src={image} alt={alt} />
      <p className={stylesContact.text}>{text}</p>
    </div>
  );
};

export { Contact };
