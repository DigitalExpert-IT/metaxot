import { LayoutMain } from "components";
import {
  SectionGalery,
  SectionHeader,
  SectionRoadmap,
  SectionExplore,
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
      <SectionRoadmap />
      <SectionExplore />
    </LayoutMain>
  );
}

export default Home;
