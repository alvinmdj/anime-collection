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
    setCollections(collections);

    const animeJson = localStorage.getItem('anime');
    const anime = animeJson ? JSON.parse(animeJson) : [];
    setAnime(anime);
  }, []);

  useEffect(() => {
    if (isMounted.current) {
      localStorage.setItem('collections', JSON.stringify(collections));
      localStorage.setItem('anime', JSON.stringify(anime));
    } else isMounted.current = true;
  }, [collections, anime]);

  function createCollection(name: string, coverImage: string = '') {
    const id = uuidv4();
    setCollections((prevState) => [...prevState, { id, name, coverImage }]);
  }

  function updateCollection(oldName: string, newName: string) {
    setCollections((prevState) =>
      prevState.map((col) => {
        if (col.name === oldName) {
          return { ...col, name: newName };
        }
        return col;
      })
    );
  }

  function deleteCollection(collectionId: string) {
    // delete all anime from this collection
    setAnime((prevState) => {
      return prevState.filter((anime) => anime.collectionId !== collectionId);
    });

    // delete collection
    setCollections((prevState) => {
      return prevState.filter((col) => col.id !== collectionId);
    });
  }

  function isAnimeInCollection(animeId: number, collectionId: string) {
    const matchingAnime = anime.find(
      (a) => a.id === animeId && a.collectionId === collectionId
    );
    return !!matchingAnime;
  }

  function getAnimeCollections(animeId: number) {
    // get anime from context by animeId
    const matchingAnime = anime.filter((a) => a.id === animeId);

    // get the collectionIds from above
    const collectionIds = matchingAnime.map((a) => a.collectionId);

    // return collections from collectionIds
    return collections.filter((c) => collectionIds.includes(c.id));
  }

  function addAnimeToCollection({
    collectionId,
    id,
    title,
    coverImage,
  }: TAnime) {
    // if collection still empty, set collection coverImage with the first anime added
    const isCollectionContainAnime = anime.find(
      (ani) => ani.collectionId === collectionId
    );
    if (!isCollectionContainAnime) {
      setCollections((prevState) =>
        prevState.map((col) =>
          col.id === collectionId ? { ...col, coverImage } : col
        )
      );
    }

    // add anime to collection
    setAnime((prevState) => [
      ...prevState,
      { collectionId, id, title, coverImage },
    ]);
  }

  function removeAnimeFromCollection(id: number, collectionId: string) {
    const updatedAnime = anime.filter(
      (ani) => !(ani.id === id && ani.collectionId === collectionId)
    );

    // check if first anime is the one to be removed
    const isFirstAnimeRemoved =
      anime.find((a) => a.collectionId === collectionId)?.id === id;

    setAnime([...updatedAnime]);

    // update cover image for the collection if first anime removed
    if (isFirstAnimeRemoved) {
      const collection = collections.find((col) => col.id === collectionId);

      if (collection) {
        // get first anime after removal
        const firstUpdatedAnime = updatedAnime.find(
          (a) => a.collectionId === collectionId
        );

        // update collection cover image accordingly
        if (firstUpdatedAnime) {
          collection.coverImage = firstUpdatedAnime.coverImage;
        } else {
          collection.coverImage = '';
        }

        setCollections([...collections]);
      }
    }
  }

  return (
    <CollectionContext.Provider
      value={{
        collections,
        createCollection,
        updateCollection,
        deleteCollection,
        isAnimeInCollection,
        getAnimeCollections,
        addAnimeToCollection,
        removeAnimeFromCollection,
      }}
    >
      {children}
    </CollectionContext.Provider>
  );
};

export default CollectionContextProvider;
