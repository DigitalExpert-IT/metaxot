import { LayoutMain } from "components";
import {
  SectionGalery,
  SectionHeader,
  SectionRoadmap,
  SectionAboutUs,
  SectionKeyFeature,
  SectionMissionCard,
  SectionExplore,
  SectionCollection,
  SectionFaqs,
  SectionCrew,
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
      <SectionCollection />
      <SectionFaqs />
      <SectionCrew />
    </LayoutMain>
  );
}

export default Home;
