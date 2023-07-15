import CollectionContext from '@/context/collection-context';
import { regexCollectionNameValidation } from '@/utils/regex';
import { FormEvent, useContext, useEffect, useState } from 'react';
import Modal, { ModalFooter } from '.';
import Button from '../Button';
import InputWithLabel from '../InputWithLabel';
import ErrorMessage from '../Text/ErrorMessage';

type TEditCollectionModalProps = {
  collectionName: string;
  onClose: () => void;
  title?: string;
};

const EditCollectionModal = ({
  collectionName,
  onClose,
  title,
}: TEditCollectionModalProps) => {
  const { collections, updateCollection } = useContext(CollectionContext);

  const [newName, setNewName] = useState(collectionName);
  const [error, setError] = useState('');

  useEffect(() => {
    setError('');
    setNewName(collectionName);
  }, [collectionName]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!newName.trim().length) {
      setError('Name must not be empty');
      return;
    }
    if (!regexCollectionNameValidation.test(newName.trim())) {
      setError('Name must not contain special character(s)');
      return;
    }

    // check if new name is already used & not by the current collection
    if (
      collections.find(
        (col) => col.name === newName && col.name !== collectionName
      )
    ) {
      setError('Collection with this name already exists');
      return;
    }
    updateCollection(collectionName, newName);
    onClose();
  }

  return (
    <Modal
      show={!!collectionName}
      onClose={onClose}
      title={title || 'Edit Collection'}
    >
      <form onSubmit={handleSubmit}>
        <InputWithLabel
          label="Name"
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <ModalFooter>
          <Button colorType="primary" type="submit">
            Create
          </Button>
          <Button colorType="danger" type="button" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </form>
    </Modal>
  );
};

export default EditCollectionModal;
