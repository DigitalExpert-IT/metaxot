import { createStore } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface IMetadata {
  attributes: [];
  description: string;
  external_url: string;
  image: string;
  name: string;
  result: {
    Id: string;
    InteriorData: string;
    FloorData: string;
    LotType: number;
    Owner: string;
    Position: { y: number; x: number; z: number };
    Rotation: { x: number; z: number; y: number };
    Status: number;
    status: number;
  };
}

interface IMetadataStore {
  metadatas: Map<string, IMetadata>;
}

const nftMetadataStore = createStore<IMetadataStore>()(
  persist(
    set => ({
      metadatas: new Map(),
    }),
    {
      name: "nft-metadata", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default nftMetadataStore;
