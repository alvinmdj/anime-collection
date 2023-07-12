import { ReactNode, useCallback, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import CollectionContext, { TAnime, TCollection } from './collection-context';

const CollectionContextProvider = ({ children }: { children: ReactNode }) => {
  const [collections, setCollections] = useState<TCollection[]>([]);
  // collections
  // [
  //   {
  //     id: string,
  //     name: string,
  //     anime: [
  //       {
  //         id,
  //         name,
  //         coverimage
  //       }
  //     ]
  //   },
  //   {
  //     id: string,
  //     name: string,
  //     anime: []
  //   }
  // ]

  useEffect(() => {
    const storableCollections = collections.map((collection) => {
      return {
        id: collection.id,
        name: collection.name,
        coverImage: collection.coverImage,
      };
    });
    localStorage.setItem('collections', JSON.stringify(storableCollections));
  }, [collections]);

  function createCollection(
    name: string,
    coverImage: string = '',
    anime: TAnime[] = []
  ) {
    // TODO: create collection, require name, generate random id
    const id = uuidv4();
    setCollections((prevState) => [
      ...prevState,
      {
        id,
        name,
        coverImage,
        anime,
      },
    ]);
  }

  function deleteCollection() {
    // TODO: delete collection by id
  }

  function addAnimeToCollection() {
    // TODO: if collection still empty, set collection coverImage with the first anime added
  }

  function removeAnimeFromCollection() {
    // TODO: update collection cover image accordingly, if all anime deleted from collections, remove collection cover image
  }

  const initContext = useCallback(async () => {
    const collections = localStorage.getItem('collections');
    const storedMemories = collections ? JSON.parse(collections) : [];
    setCollections(storedMemories);
  }, []);

  return (
    <CollectionContext.Provider
      value={{
        collections,
        createCollection,
        deleteCollection,
        addAnimeToCollection,
        removeAnimeFromCollection,
        initContext,
      }}
    >
      {children}
    </CollectionContext.Provider>
  );
};

export default CollectionContextProvider;
