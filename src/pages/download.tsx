import { Box } from "@chakra-ui/react";
import { LayoutMain } from "components";
import { BackgroundPageDownload } from "components/Background";
import {
  SectionExplanation,
  SectionHeader,
  SectionSystem,
} from "components/pages/Download";
function Download() {
  return (
    <LayoutMain title="Download">
      <BackgroundPageDownload />
      <SectionHeader />
      <SectionSystem />
      <SectionExplanation />
    </LayoutMain>
  );
}

export default Download;
