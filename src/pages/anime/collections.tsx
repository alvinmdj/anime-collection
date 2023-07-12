import MainLayout from '@/components/Layout/MainLayout';
import CollectionContext from '@/context/collection-context';
import { FormEvent, useContext, useState } from 'react';

const Collections = () => {
  const { collections, createCollection } = useContext(CollectionContext);

  const [name, setName] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    {
      /* // TODO: validate name as requirement */
    }
    createCollection(name);
  }

  return (
    <MainLayout>
      <h1>Collections</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button>Create new collection</button>
      </form>
      {collections.map((col) => (
        <div key={col.id}>
          <p>{col.name}</p>
        </div>
      ))}
    </MainLayout>
  );
};

export default Collections;
