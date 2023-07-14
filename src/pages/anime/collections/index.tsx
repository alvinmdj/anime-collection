import Button from '@/components/Button';
import MainLayout from '@/components/Layout/MainLayout';
import CreateCollectionModal from '@/components/Modal/CreateCollectionModal';
import CollectionContext from '@/context/collection-context';
import Image from 'next/image';
import Link from 'next/link';
import { useContext, useState } from 'react';

const Collections = () => {
  const { collections, removeAnimeFromCollection } =
    useContext(CollectionContext);

  const [showModal, setShowModal] = useState(false);

  return (
    <MainLayout>
      <h1>Collections</h1>
      <Button colorType="primary" onClick={() => setShowModal(true)}>
        Add new collection
      </Button>
      <div>
        {collections.map((col) => (
          <Link key={col.id} href={`/anime/collections/${col.name}`}>
            <Image
              height={100}
              width={100}
              alt={col.name}
              src={col.coverImage || '/images/empty-collection.png'}
            />
            <p>{col.name}</p>
          </Link>
        ))}
      </div>
      <CreateCollectionModal
        show={showModal}
        onClose={() => setShowModal(false)}
      />
    </MainLayout>
  );
};

export default Collections;
