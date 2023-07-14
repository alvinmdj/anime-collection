import Button from '@/components/Button';
import Container from '@/components/Container';
import MainLayout from '@/components/Layout/MainLayout';
import CreateCollectionModal from '@/components/Modal/CreateCollectionModal';
import Heading from '@/components/Text/Heading';
import CollectionContext from '@/context/collection-context';
import { mq } from '@/utils/media-query';
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { useContext, useState } from 'react';

const Collections = () => {
  const { collections, removeAnimeFromCollection } =
    useContext(CollectionContext);

  const [showModal, setShowModal] = useState(false);

  return (
    <MainLayout>
      <Container margin="20px 0" padding="0 5%">
        <Heading textCenter>Anime Collections</Heading>
        <Button
          width="250px"
          margin="16px 0 0 0"
          colorType="primary"
          onClick={() => setShowModal(true)}
        >
          Create new collection
        </Button>
        <CollectionContainer>
          {collections.map((col) => (
            <Link key={col.id} href={`/anime/collections/${col.name}`}>
              <CollectionCoverImage
                defaultImage={!col.coverImage}
                src={col.coverImage || '/images/empty-collection.png'}
                alt={col.name}
                width={125}
                height={175}
              />
              <p>{col.name}</p>
            </Link>
          ))}
        </CollectionContainer>
      </Container>
      <CreateCollectionModal
        show={showModal}
        onClose={() => setShowModal(false)}
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

const CollectionCoverImage = styled(Image)(
  ({ defaultImage }: { defaultImage: boolean }) => ({
    borderRadius: '8px',
    backgroundColor: '#ddd',
    objectFit: defaultImage ? 'contain' : 'cover',
  })
);

export default Collections;
