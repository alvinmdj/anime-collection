import { createContext } from 'react';

export type TCollection = {
  id: string;
  name: string;
  coverImage?: string;
};

export type TAnime = {
  collectionId: string;
  id: number;
  title: string;
  coverImage: string;
};

type TCollectionContext = {
  collections: TCollection[];
  createCollection: (
    name: string,
    coverImage?: string,
    anime?: TAnime[]
  ) => void;
  deleteCollection: (id: string) => void;
  isAnimeInCollection: (animeId: number, collectionId: string) => boolean;
  getAnimeCollections: (animeId: number) => TCollection[];
  addAnimeToCollection: (input: TAnime) => void;
  removeAnimeFromCollection: (id: number, collectionId: string) => void;
};

const CollectionContext = createContext({} as TCollectionContext);

export default CollectionContext;
