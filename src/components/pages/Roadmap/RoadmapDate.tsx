import { Box, Spacer, Stack } from "@chakra-ui/react";
import { Trans } from "react-i18next";
interface RoadmapDateProps {
  month?: string;
  days?: string;
}

export const RoadmapDate: React.FC<RoadmapDateProps> = props => {
  const { month, days } = props;
  return (
    <Stack direction="row" textAlign="center" fontSize={"xl"} fontWeight="bold">
      <Box
        w="24"
        h="24"
        rounded="full"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bgGradient="linear(100deg, whiteAlpha.500, transparent)"
      >
        <Box>
          <Trans
            i18nKey={month}
            components={{
              span: <Spacer fontSize="md" fontWeight="normal"></Spacer>,
            }}
          />
        </Box>
      </Box>
      <Box display="flex" alignItems={"center"}>
        :
      </Box>
      <Box
        w="24"
        h="24"
        rounded="full"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bgGradient="linear(100deg, whiteAlpha.500, transparent)"
      >
        <Box>
          <Trans
            i18nKey={days}
            components={{
              span: <Spacer fontSize="md" fontWeight="normal"></Spacer>,
            }}
          />
        </Box>
      </Box>
    </Stack>
  );
};
RoadmapDate.defaultProps = {
  days: "Need<span>Days</span>",
  month: "Need<span>Month</span>",
};
