import { LayoutMain } from "components";
import {
  SectionHeader,
  SectionMissionCard,
  SectionAboutUs,
} from "components/pages";

function Home() {
  return (
    <LayoutMain>
      <SectionHeader />
      <SectionMissionCard />
      <SectionAboutUs />
    </LayoutMain>
  );
}

export default Home;
