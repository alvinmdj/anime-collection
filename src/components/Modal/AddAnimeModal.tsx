import { GetAnimeDetailQuery } from '@/__generated__/graphql';
import CollectionContext from '@/context/collection-context';
import { QueryResult } from '@apollo/client';
import { FormEvent, useContext, useEffect, useState } from 'react';
import Modal, { ModalFooter } from '.';
import Button from '../Button';
import ErrorMessage from '../Text/ErrorMessage';
import CreateCollectionModal from './CreateCollectionModal';

type TAddAnimeModalProps = {
  data: QueryResult<GetAnimeDetailQuery>['data'];
  show: boolean;
  onClose: () => void;
};

const AddAnimeModal = ({ data, show, onClose }: TAddAnimeModalProps) => {
  const { collections, isAnimeInCollection, addAnimeToCollection } =
    useContext(CollectionContext);

  const [error, setError] = useState('');
  const [collectionId, setCollectionId] = useState('');

  useEffect(() => {
    setError('');
    setCollectionId('');
  }, [show]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (collectionId === '') {
      setError('Please choose a collection');
      return;
    }

    if (data?.Media) {
      if (isAnimeInCollection(data.Media.id, collectionId)) {
        setError('Anime is already in this collection');
        return;
      }

      addAnimeToCollection({
        collectionId,
        id: data.Media.id,
        title:
          data.Media.title!.english ||
          data.Media.title!.native ||
          data.Media.title!.romaji ||
          'No Title',
        coverImage: data.Media.coverImage?.large || '',
      });
    } else {
      setError('Anime data cannot be found');
    }

    onClose();
  }

  if (!collections.length) {
    return (
      <CreateCollectionModal
        title="Please create a collection name before proceeds"
        show={show}
        onClose={onClose}
      />
    );
  }

  return (
    <Modal show={show} onClose={onClose} title="Add to collection">
      <form onSubmit={handleSubmit}>
        <label>Choose a collection:</label>
        <select
          defaultValue=""
          onChange={(e) => setCollectionId(e.target.value)}
        >
          <option disabled value="">
            Choose a collection
          </option>
          {collections.map((col) => (
            <option key={col.id} value={col.id}>
              {col.name}
            </option>
          ))}
        </select>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <ModalFooter>
          <Button colorType="primary" type="submit">
            Add
          </Button>
          <Button colorType="danger" type="button" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </form>
    </Modal>
  );
};

export default AddAnimeModal;
