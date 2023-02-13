import { LayoutMain } from "components";
import {
  SectionGalery,
  SectionHeader,
  SectionAboutUs,
  SectionMissionCard,
  SectionRoadmap,
} from "components/pages";

function Home() {
  return (
    <LayoutMain>
      <SectionHeader />
      <SectionMissionCard />
      <SectionAboutUs />
      <SectionGalery />
      <SectionRoadmap />
    </LayoutMain>
  );
}

export default Home;
