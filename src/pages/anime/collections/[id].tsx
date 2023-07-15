import AnimeCard from '@/components/Anime/AnimeCard';
import AnimeListContainer from '@/components/Anime/AnimeListContainer';
import Button from '@/components/Button';
import Container from '@/components/Container';
import MainLayout from '@/components/Layout/MainLayout';
import EditCollectionModal from '@/components/Modal/EditCollectionModal';
import Heading from '@/components/Text/Heading';
import CollectionContext from '@/context/collection-context';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';

const CollectionDetail = () => {
  const router = useRouter();

  const [editName, setEditName] = useState('');

  const { getCollectionData } = useContext(CollectionContext);

  const collectionData = getCollectionData(router.query.id?.toString() || '');

  return (
    <MainLayout>
      <Container margin="20px 0" padding="0 5%">
        {collectionData ? (
          <>
            <Heading textCenter margin="0 0 20px 0">
              {collectionData.name}
            </Heading>
            <Button
              width="250px"
              margin="16px 0 0 0"
              colorType="primary"
              onClick={() => setEditName(collectionData.name)}
            >
              Change collection name
            </Button>
            {!!collectionData?.anime.length ? (
              <AnimeListContainer>
                {collectionData.anime.map((ani) => (
                  <AnimeCard
                    key={ani.id}
                    id={ani.id}
                    title={ani.title}
                    coverImage={ani.coverImage}
                  />
                ))}
              </AnimeListContainer>
            ) : (
              <p style={{ textAlign: 'center' }}>No anime in this collection</p>
            )}
          </>
        ) : (
          <Heading textCenter>
            404 <br />
            Collection Not Found
          </Heading>
        )}
      </Container>
      <EditCollectionModal
        collectionName={editName}
        onClose={() => setEditName('')}
      />
    </MainLayout>
  );
};

export default CollectionDetail;
