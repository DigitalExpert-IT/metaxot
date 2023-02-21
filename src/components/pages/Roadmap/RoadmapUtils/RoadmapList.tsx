import {
  createStylesContext,
  ListProps,
  UnorderedList,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import { createContext } from "react";
export const RoadmapListContext = createContext<any>({});

interface RoadmapListProps extends ListProps {}

export const RoadmapList: React.FC<RoadmapListProps> = props => {
  const { variant, children, ...rest } = props;
  const style = useMultiStyleConfig("RoadmapList", { variant });
  return (
    <UnorderedList __css={style.main} {...rest}>
      <RoadmapListContext.Provider value={style}>
        {children}
      </RoadmapListContext.Provider>
    </UnorderedList>
  );
};
