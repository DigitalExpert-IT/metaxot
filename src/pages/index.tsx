import { LayoutMain } from "components";
import {
  SectionGalery,
  SectionHeader,
  SectionAboutUs,
  SectionKeyFeature,
  SectionMissionCard,
  SectionExplore,
  SectioCollection,
  SectionFaqs,
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
      <SectionFaqs />
    </LayoutMain>
  );
}

export default Home;
