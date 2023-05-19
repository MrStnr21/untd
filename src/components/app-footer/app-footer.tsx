import { FC } from "react";

import stylesAppFooter from "./app-footer.module.css";

import { FeedbackForm } from "../feedback-form/feedback-form";
import { Title } from "../ui/title/title";

const AppFooter: FC = () => {
  return (
    <footer className={stylesAppFooter.footerContainer}>
      <Title text="ответим на любой вопрос" />
      <FeedbackForm />
    </footer>
  );
};

export { AppFooter };
