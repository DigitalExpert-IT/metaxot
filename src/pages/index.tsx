import { LayoutMain } from "components";
import {
  SectionGalery,
  SectionHeader,
  SectionAboutUs,
  SectionKeyFeature,
  SectionMissionCard,
  SectionExplore,
  SectioCollection,
} from "components/pages";

function Home() {
  return (
    <LayoutMain>
      <SectionHeader />
      <SectionMissionCard />
      <SectionAboutUs />
      <SectionKeyFeature />
      <SectionGalery />
      <SectionExplore />
      <SectioCollection />
    </LayoutMain>
  );
}

export default Home;
