import CollectionContext from '@/context/collection-context';
import { regexCollectionNameValidation } from '@/utils/regex';
import { FormEvent, useContext, useState } from 'react';
import Modal from '.';

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

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!regexCollectionNameValidation.test(name)) {
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
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button>Create new collection</button>
        {error && <p>{error}</p>}
      </form>
    </Modal>
  );
};

export default CreateCollectionModal;
