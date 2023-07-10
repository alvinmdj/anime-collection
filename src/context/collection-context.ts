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
  createCollection: (name: string) => void;
  deleteCollection: (id: string) => void;
  addAnimeToCollection: (input: TAnime) => void;
  removeAnimeFromCollection: (id: string, collectionId: string) => void;
  initContext: () => void;
}>({
  collections: [],
  createCollection: () => {},
  deleteCollection: () => {},
  addAnimeToCollection: () => {},
  removeAnimeFromCollection: () => {},
  initContext: () => {},
});

export default CollectionContext;
