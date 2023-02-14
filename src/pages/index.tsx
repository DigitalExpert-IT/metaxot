import { LayoutMain } from "components";
import {
  SectionGalery,
  SectionHeader,
  SectionAboutUs,
  SectionMissionCard,
  SectionExplore,
} from "components/pages";

function Home() {
  return (
    <LayoutMain>
      <SectionHeader />
      <SectionMissionCard />
      <SectionAboutUs />
      <SectionGalery />
      <SectionExplore />
    </LayoutMain>
  );
}

export default Home;
