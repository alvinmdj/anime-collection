import AnimeListContainer from '@/components/Anime/AnimeListContainer';
import Button from '@/components/Button';
import Container from '@/components/Container';
import MainLayout from '@/components/Layout/MainLayout';
import ConfirmationModal from '@/components/Modal/ConfirmationModal';
import EditCollectionModal from '@/components/Modal/EditCollectionModal';
import Heading from '@/components/Text/Heading';
import CollectionContext from '@/context/collection-context';
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MouseEvent, useContext, useState } from 'react';

const CollectionDetail = () => {
  const router = useRouter();

  const [editName, setEditName] = useState('');
  const [deleteId, setDeleteId] = useState(0);

  const { getCollectionData, removeAnimeFromCollection } =
    useContext(CollectionContext);

  const collectionData = getCollectionData(router.query.id?.toString() || '');

  function handleDelete(e: MouseEvent<HTMLElement>, id: number) {
    e.preventDefault();
    e.stopPropagation();
    setDeleteId(id);
  }

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
                  <Link key={ani.id} href={`/anime/${ani.id}`}>
                    <AnimeCollectionCard>
                      <AnimeCollectionCoverImage
                        src={ani.coverImage}
                        alt={ani.title}
                        width={150}
                        height={200}
                      />
                      <p>{ani.title}</p>
                      <Button
                        colorType="danger"
                        width="100%"
                        onClick={(e) => handleDelete(e, ani.id)}
                      >
                        Remove
                      </Button>
                    </AnimeCollectionCard>
                  </Link>
                  // // TODO: CREATE A NEW COMPONENT, WE NEED A REMOVE ANIME BUTTON
                  // <AnimeCard
                  //   key={ani.id}
                  //   id={ani.id}
                  //   title={ani.title}
                  //   coverImage={ani.coverImage}
                  // />
                ))}
              </AnimeListContainer>
            ) : (
              <p style={{ textAlign: 'center' }}>No anime in this collection</p>
            )}
            <EditCollectionModal
              collectionName={editName}
              onClose={() => setEditName('')}
            />
            <ConfirmationModal
              title="Confirm remove this anime from collection"
              show={!!deleteId}
              onClose={() => setDeleteId(0)}
              onConfirm={() => {
                removeAnimeFromCollection(deleteId, collectionData.id);
                setDeleteId(0);
              }}
            />
          </>
        ) : (
          <Heading textCenter>
            404 <br />
            Collection Not Found
          </Heading>
        )}
      </Container>
    </MainLayout>
  );
};

const AnimeCollectionCard = styled('div')((props) => ({
  padding: '8px',
  backgroundColor: '#FCEAEA',
  borderRadius: '8px',
}));

const AnimeCollectionCoverImage = styled(Image)((props) => ({
  borderRadius: '8px',
  backgroundColor: '#ddd',
  width: '100%',
}));

export default CollectionDetail;
