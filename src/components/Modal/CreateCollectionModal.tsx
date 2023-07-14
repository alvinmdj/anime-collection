import CollectionContext from '@/context/collection-context';
import { regexCollectionNameValidation } from '@/utils/regex';
import { FormEvent, useContext, useEffect, useState } from 'react';
import Modal, { ModalFooter } from '.';
import Button from '../Button';
import InputWithLabel from '../InputWithLabel';
import ErrorMessage from '../Text/ErrorMessage';

type TCreateCollectionModalProps = {
  show: boolean;
  onClose: () => void;
  title?: string;
};

const CreateCollectionModal = ({
  show,
  onClose,
  title,
}: TCreateCollectionModalProps) => {
  const { collections, createCollection } = useContext(CollectionContext);

  const [name, setName] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    setError('');
    setName('');
  }, [show]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!regexCollectionNameValidation.test(name.trim())) {
      setError('Name must not contain special character(s)');
      return;
    }
    if (collections.find((col) => col.name === name)) {
      setError('Collection with this name already exists');
      return;
    }
    createCollection(name);
    setName('');
    setError('');
    onClose();
  }

  return (
    <Modal show={show} onClose={onClose} title={title || 'Create Collection'}>
      <form onSubmit={handleSubmit}>
        <InputWithLabel
          label="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
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

export default CreateCollectionModal;
