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
  const [selectedCollectionName, setSelectedCollectionName] = useState('');

  function handleEdit(e: MouseEvent<HTMLElement>, name: string) {
    e.preventDefault();
    e.stopPropagation();
    setEditName(name);
  }

  function handleDelete(e: MouseEvent<HTMLElement>, id: string, name: string) {
    e.preventDefault();
    e.stopPropagation();
    setDeleteId(id);
    setSelectedCollectionName(name);
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
        {!!collections.length ? (
          <CollectionContainer>
            {collections.map((col) => (
              <Link key={col.id} href={`/anime/collections/${col.id}`}>
                <CollectionCard>
                  <CollectionCoverImage
                    src={col.coverImage || '/images/empty-collection.png'}
                    alt={col.name}
                    width={150}
                    height={200}
                    style={{ objectFit: col.coverImage ? 'cover' : 'contain' }}
                  />
                  <p style={{ marginBottom: '8px', wordBreak: 'break-word' }}>
                    {col.name}
                  </p>
                  <Button
                    colorType="warning"
                    width="100%"
                    margin="auto 0 0 0"
                    onClick={(e) => handleEdit(e, col.name)}
                  >
                    Edit
                  </Button>
                  <Button
                    colorType="danger"
                    width="100%"
                    onClick={(e) => handleDelete(e, col.id, col.name)}
                  >
                    Remove
                  </Button>
                </CollectionCard>
              </Link>
            ))}
          </CollectionContainer>
        ) : (
          <p style={{ textAlign: 'center', marginTop: '8px' }}>
            You do not have any collection. Create a new one
          </p>
        )}
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
        title={`Confirm delete ${selectedCollectionName}`}
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
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  height: '100%',
}));

const CollectionCoverImage = styled(Image)((props) => ({
  borderRadius: '8px',
  backgroundColor: '#ddd',
  width: '100%',
}));

export default Collections;
