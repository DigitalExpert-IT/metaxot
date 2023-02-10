import { LayoutMain } from "components";
import {
  SectionHeader,
  SectionMissionCard,
  SectionAboutUs,
  SectionGalery
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
