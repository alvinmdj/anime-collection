import Button from '@/components/Button';
import Container from '@/components/Container';
import MainLayout from '@/components/Layout/MainLayout';
import ConfirmationModal from '@/components/Modal/ConfirmationModal';
import CreateCollectionModal from '@/components/Modal/CreateCollectionModal';
import EditCollectionModal from '@/components/Modal/EditCollectionModal';
import Heading from '@/components/Text/Heading';
import CollectionContext from '@/context/collection-context';
import { mq } from '@/utils/media-query';
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { MouseEvent, useContext, useState } from 'react';

const Collections = () => {
  const { collections, deleteCollection } = useContext(CollectionContext);

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [editName, setEditName] = useState('');
  const [deleteId, setDeleteId] = useState('');

  function handleEdit(e: MouseEvent<HTMLElement>, name: string) {
    e.preventDefault();
    e.stopPropagation();
    setEditName(name);
  }

  function handleDelete(e: MouseEvent<HTMLElement>, id: string) {
    e.preventDefault();
    e.stopPropagation();
    setDeleteId(id);
  }

  return (
    <MainLayout>
      <Container margin="20px 0" padding="0 5%">
        <Heading textCenter>Anime Collections</Heading>
        <Button
          width="250px"
          margin="16px 0 0 0"
          colorType="primary"
          onClick={() => setShowCreateModal(true)}
        >
          Create new collection
        </Button>
        <CollectionContainer>
          {collections.map((col) => (
            <Link key={col.id} href={`/anime/collections/${col.name}`}>
              <CollectionCard>
                <CollectionCoverImage
                  src={col.coverImage || '/images/empty-collection.png'}
                  alt={col.name}
                  width={150}
                  height={200}
                  style={{ objectFit: col.coverImage ? 'cover' : 'contain' }}
                />
                <p>{col.name}</p>
                <Button
                  colorType="warning"
                  width="100%"
                  margin="8px 0"
                  onClick={(e) => handleEdit(e, col.name)}
                >
                  Edit
                </Button>
                <Button
                  colorType="danger"
                  width="100%"
                  onClick={(e) => handleDelete(e, col.id)}
                >
                  Remove
                </Button>
              </CollectionCard>
            </Link>
          ))}
        </CollectionContainer>
      </Container>
      <CreateCollectionModal
        show={showCreateModal}
        onClose={() => setShowCreateModal(false)}
      />
      <EditCollectionModal
        collectionName={editName}
        onClose={() => setEditName('')}
      />
      <ConfirmationModal
        show={!!deleteId}
        onClose={() => setDeleteId('')}
        onConfirm={() => {
          deleteCollection(deleteId);
          setDeleteId('');
        }}
      />
    </MainLayout>
  );
};

const CollectionContainer = styled.div((props) => ({
  marginTop: '20px',
  display: 'grid',
  alignItems: 'center',
  gap: '20px',
  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  [mq[0]]: {
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  },
  [mq[1]]: {
    gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
  },
  [mq[2]]: {
    gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
  },
}));

const CollectionCard = styled('div')((props) => ({
  padding: '8px',
  backgroundColor: '#FCEAEA',
  borderRadius: '8px',
}));

const CollectionCoverImage = styled(Image)((props) => ({
  borderRadius: '8px',
  backgroundColor: '#ddd',
  width: '100%',
}));

export default Collections;
