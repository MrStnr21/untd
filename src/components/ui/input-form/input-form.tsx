import { FC } from "react";

import stylesInputForm from "./input-form.module.css";

interface IInputForm {
  name: string;
  id: string;
  type: string;
  placeholder: string;
}

const InputForm: FC<IInputForm> = ({
  name,
  id,
  type,
  placeholder,
}): JSX.Element => {
  return (
    <input
      name={name}
      id={id}
      type={type}
      placeholder={placeholder}
      className={stylesInputForm.inputForm}
    />
  );
};

export { InputForm };
