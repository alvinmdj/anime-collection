import MainLayout from '@/components/Layout/MainLayout';
import CollectionContext from '@/context/collection-context';
import { useContext } from 'react';

const Collections = () => {
  const { collections } = useContext(CollectionContext);
  console.log('collections =>', collections);
  return (
    <MainLayout>
      <h1>Collections</h1>
      <form>
        <input type="text" />
      </form>
      <button>Create new collection</button>
      {/* // TODO: validate name as requirement */}
      {collections.map((col) => (
        <div key={col.id}>
          <p>{col.name}</p>
        </div>
      ))}
    </MainLayout>
  );
};

export default Collections;
