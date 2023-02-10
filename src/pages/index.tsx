import { LayoutMain } from "components";
import {
  SectionGalery,
  SectionHeader,
  SectionAboutUs,
  SectionMissionCard,
} from "components/pages";

function Home() {
  return (
    <LayoutMain>
      <SectionHeader />
      <SectionMissionCard />
      <SectionAboutUs />
      <SectionGalery />
    </LayoutMain>
  );
}

export default Home;
