import { LayoutMain } from "components";
import {
  SectionGalery,
  SectionHeader,
  SectionAboutUs,
  SectionKeyFeature,
  SectionMissionCard,
} from "components/pages";

function Home() {
  return (
    <LayoutMain>
      <SectionHeader />
      <SectionMissionCard />
      <SectionAboutUs />
      <SectionKeyFeature />
      <SectionGalery />
    </LayoutMain>
  );
}

export default Home;
