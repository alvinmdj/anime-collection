import { ReactNode, useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import CollectionContext, { TAnime, TCollection } from './collection-context';

const CollectionContextProvider = ({ children }: { children: ReactNode }) => {
  const [collections, setCollections] = useState<TCollection[]>([]);
  const [anime, setAnime] = useState<TAnime[]>([]);

  const isMounted = useRef(false);

  useEffect(() => {
    const collectionsJson = localStorage.getItem('collections');
    const collections = collectionsJson ? JSON.parse(collectionsJson) : [];

    const animeJson = localStorage.getItem('anime');
    const anime = animeJson ? JSON.parse(animeJson) : [];

    setCollections(collections);
    setAnime(anime);
  }, []);

  useEffect(() => {
    if (isMounted.current) {
      localStorage.setItem('collections', JSON.stringify(collections));
      console.log('collection useeffect');
    } else isMounted.current = true;
  }, [collections]);

  useEffect(() => {
    if (isMounted.current) {
      localStorage.setItem('anime', JSON.stringify(anime));
      console.log('anime useeffect');
    } else isMounted.current = true;
  }, [anime]);

  function createCollection(name: string, coverImage: string = '') {
    // TODO: create collection, require name, generate random id
    const id = uuidv4();
    setCollections((prevState) => [...prevState, { id, name, coverImage }]);
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

  return (
    <CollectionContext.Provider
      value={{
        collections,
        createCollection,
        deleteCollection,
        addAnimeToCollection,
        removeAnimeFromCollection,
      }}
    >
      {children}
    </CollectionContext.Provider>
  );
};

export default CollectionContextProvider;
