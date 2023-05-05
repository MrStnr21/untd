import { FC } from "react";

import { Welcome } from "../../components/main/welcome/welcome";
import { About } from "../../components/main/about/about";
import { WorkExamples } from "../../components/main/work-examples/work-examples";
import { Facts } from "../../components/main/facts/facts";

const MainPage: FC = (): JSX.Element => {
  return (
    <>
      <Welcome />
      <About />
      <WorkExamples />
      <Facts />
    </>
  );
};

export { MainPage };
