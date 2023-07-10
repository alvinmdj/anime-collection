import { ReactNode, useCallback, useEffect, useState } from 'react';
import CollectionContext, { TCollection } from './collection-context';

const CollectionContextProvider = ({ children }: { children: ReactNode }) => {
  const [collections, setCollections] = useState<TCollection[]>([]);

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

  function createCollection() {
    // TODO: create collection, require name, generate random id
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
