import { FC } from "react";

import { Welcome } from "../../components/main/welcome/welcome";
import { About } from "../../components/main/about/about";
import { WorkExamples } from "../../components/main/work-examples/work-examples";
import { Facts } from "../../components/main/facts/facts";
import { Services } from "../../components/main/services/services";
import { OurWorks } from "../../components/main/our-works/our-works";
import { AppFooter } from "../../components/app-footer/app-footer";
import { FeedbackForm } from "../../components/main/feedback-form/feedback-form";

const MainPage: FC = (): JSX.Element => {
  return (
    <>
      <Welcome />
      <About />
      <WorkExamples />
      <Facts type="wrap" />
      <Services />
      <Facts type="detailing" />
      <OurWorks />
      <FeedbackForm />
      <AppFooter />
    </>
  );
};

export { MainPage };
