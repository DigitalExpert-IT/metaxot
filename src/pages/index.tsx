import { LayoutMain } from "components";
import {
  SectionHeader,
  SectionMissionCard,
  SectionAboutUs,
  SectionKeyFeature,
} from "components/pages";

function Home() {
  return (
    <LayoutMain>
      <SectionHeader />
      <SectionMissionCard />
      <SectionAboutUs />
      <SectionKeyFeature />
    </LayoutMain>
  );
}

export default Home;
