import { createContext } from 'react';

export type TCollection = {
  id: string;
  name: string;
  coverImage?: string;
};

export type TAnime = {
  collectionId: string;
  id: string;
  name: string;
  coverImage: string;
};

const CollectionContext = createContext<{
  collections: TCollection[];
  createCollection: (
    name: string,
    coverImage?: string,
    anime?: TAnime[]
  ) => void;
  deleteCollection: (id: string) => void;
  addAnimeToCollection: (input: TAnime) => void;
  removeAnimeFromCollection: (id: string, collectionId: string) => void;
}>({
  collections: [],
  createCollection: () => {},
  deleteCollection: () => {},
  addAnimeToCollection: () => {},
  removeAnimeFromCollection: () => {},
});

export default CollectionContext;
