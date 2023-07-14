import Button from '@/components/Button';
import Container from '@/components/Container';
import MainLayout from '@/components/Layout/MainLayout';
import AddAnimeModal from '@/components/Modal/AddAnimeModal';
import Heading from '@/components/Text/Heading';
import CollectionContext from '@/context/collection-context';
import { GET_ANIME_DETAIL } from '@/graphql/anime';
import { mq } from '@/utils/media-query';
import { useQuery } from '@apollo/client';
import styled from '@emotion/styled';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';

const AnimeDetail = () => {
  const router = useRouter();

  const { getAnimeCollections } = useContext(CollectionContext);

  const [showModal, setShowModal] = useState(false);

  const animeDetail = useQuery(GET_ANIME_DETAIL, {
    variables: {
      id: Number(router.query.id),
    },
  });

  return (
    <MainLayout>
      {animeDetail.loading && <p>Loading...</p>}
      {animeDetail.error && <p>Error!</p>}
      {animeDetail.data && (
        <>
          <BannerImage
            src={animeDetail.data?.Media?.bannerImage || ''}
            alt={animeDetail.data?.Media?.title?.english || ''}
            width={0}
            height={0}
            sizes="100vw"
          />
          <Container margin="20px 0">
            <Heading>
              {animeDetail.data?.Media?.title?.romaji ||
                animeDetail.data?.Media?.title?.english ||
                animeDetail.data?.Media?.title?.native}
            </Heading>
            <div
              dangerouslySetInnerHTML={{
                __html: animeDetail.data?.Media?.description || '',
              }}
            />
            <p>Total episode: {animeDetail.data.Media?.episodes}</p>
            <p>Overall score: {animeDetail.data.Media?.averageScore}</p>
            <div>
              <p>Genres:</p>
              {animeDetail.data.Media?.genres?.map((genre) => (
                <p key={genre}>{genre}</p>
              ))}
            </div>
            <p>Status: {animeDetail.data.Media?.status}</p>
            <Button colorType="primary" onClick={() => setShowModal(true)}>
              Add to Collection
            </Button>
            {getAnimeCollections(animeDetail.data?.Media?.id || -1).map(
              (col) => (
                <div key={col.id}>
                  <p>{col.name}</p>
                </div>
              )
            )}
            <AddAnimeModal
              data={animeDetail.data}
              show={showModal}
              onClose={() => setShowModal(false)}
            />
          </Container>
        </>
      )}
    </MainLayout>
  );
};

const BannerImage = styled(Image)((props) => ({
  width: '100%',
  height: '200px',
  objectFit: 'cover',
  [mq[2]]: {
    height: '250px',
  },
  [mq[3]]: {
    height: '300px',
  },
}));

export default AnimeDetail;
