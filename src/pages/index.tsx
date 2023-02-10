import { LayoutMain } from "components";
import { SectionHeader, SectionAboutUs, SectionGalery } from "components/pages";

function Home() {
  return (
    <LayoutMain>
      <SectionHeader />
      <SectionAboutUs />
      <SectionGalery />
    </LayoutMain>
  );
}

export default Home;
