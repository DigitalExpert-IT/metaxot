import {
  createStylesContext,
  ListProps,
  UnorderedList,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import { createContext } from "react";
export const RoadmapListContext = createContext<any>({});

export const RoadmapList: React.FC<ListProps> = props => {
  const { children, ...rest } = props;
  const style = useMultiStyleConfig("RoadmapList");
  return (
    <UnorderedList __css={style.main} {...rest}>
      <RoadmapListContext.Provider value={style}>
        {children}
      </RoadmapListContext.Provider>
    </UnorderedList>
  );
};
