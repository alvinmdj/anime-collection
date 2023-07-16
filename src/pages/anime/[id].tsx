import Badge from '@/components/Badge';
import Button from '@/components/Button';
import Container from '@/components/Container';
import MainLayout from '@/components/Layout/MainLayout';
import LoadingSpinner from '@/components/LoadingSpinner';
import AddAnimeModal from '@/components/Modal/AddAnimeModal';
import Heading from '@/components/Text/Heading';
import CollectionContext from '@/context/collection-context';
import { GET_ANIME_DETAIL } from '@/graphql/anime';
import { mq } from '@/utils/media-query';
import { useQuery } from '@apollo/client';
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';

const AnimeDetailPage = () => {
  const router = useRouter();

  const { getAnimeCollections } = useContext(CollectionContext);

  const [showModal, setShowModal] = useState(false);

  const animeDetail = useQuery(GET_ANIME_DETAIL, {
    variables: {
      id: Number(router.query.id),
    },
  });

  const savedAnime = getAnimeCollections(animeDetail.data?.Media?.id || -1);

  return (
    <MainLayout>
      {animeDetail.loading && <LoadingSpinner />}
      {animeDetail.error && (
        <p style={{ textAlign: 'center', margin: '12px' }}>
          {animeDetail.error.message}
        </p>
      )}
      {animeDetail.data && (
        <>
          <BannerImage
            src={animeDetail.data?.Media?.bannerImage || ''}
            alt={animeDetail.data?.Media?.title?.english || ''}
            width={0}
            height={0}
            sizes="100vw"
            priority
          />
          <Container margin="20px 0" padding="0 5%">
            <AnimeTopContainer>
              <CoverImage
                src={animeDetail.data.Media?.coverImage?.large || ''}
                alt={animeDetail.data.Media?.title?.english || ''}
                width={180}
                height={250}
              />
              <FlexWrapper>
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
              </FlexWrapper>
            </AnimeTopContainer>
            <AnimeGenres>
              <p>Genres:</p>
              <FlexWrapper gap="6px">
                {animeDetail.data.Media?.genres?.map((genre) => (
                  <Badge key={genre}>{genre}</Badge>
                ))}
              </FlexWrapper>
            </AnimeGenres>
            <AnimeBottomContainer>
              <p>
                <strong>Status:</strong>{' '}
                {animeDetail.data.Media?.status || 'Currently not available'}
              </p>
              <p>
                <strong>Total episode:</strong>{' '}
                {animeDetail.data.Media?.episodes || 'Currently not available'}
              </p>
              <p>
                <strong>Overall score:</strong>{' '}
                {animeDetail.data.Media?.averageScore ||
                  'Currently not available'}
              </p>
            </AnimeBottomContainer>
            <Button colorType="primary" onClick={() => setShowModal(true)}>
              Add to Collection
            </Button>
            <AnimeCollection>
              <strong>Anime has been saved into these collections:</strong>
              {!!savedAnime.length ? (
                <FlexWrapper>
                  {savedAnime.map((col) => (
                    <Link
                      key={col.id}
                      href={`/anime/collections/${col.id}`}
                      style={{ maxWidth: '125px' }}
                    >
                      <CoverImage
                        src={col.coverImage || '/images/empty-collection.png'}
                        alt={col.name}
                        width={125}
                        height={175}
                      />
                      <p style={{ wordBreak: 'break-word' }}>{col.name}</p>
                    </Link>
                  ))}
                </FlexWrapper>
              ) : (
                <p>None</p>
              )}
            </AnimeCollection>
          </Container>
          <AddAnimeModal
            data={animeDetail.data}
            show={showModal}
            onClose={() => setShowModal(false)}
          />
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

const CoverImage = styled(Image)((props) => ({
  borderRadius: '8px',
}));

const AnimeTopContainer = styled('div')((props) => ({
  backgroundColor: '#F2F3F4',
  padding: '12px',
  borderRadius: '8px',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '12px',
  [mq[0]]: {
    flexWrap: 'nowrap',
  },
}));

const AnimeGenres = styled('div')((props) => ({
  fontWeight: 'bold',
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
  backgroundColor: '#E9F7EF',
  padding: '12px',
  borderRadius: '8px',
  marginTop: '8px',
}));

const AnimeBottomContainer = styled('div')((props) => ({
  backgroundColor: '#E5F2FF',
  padding: '12px',
  borderRadius: '8px',
  gap: '12px',
  margin: '8px 0',
}));

const AnimeCollection = styled('div')((props) => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#FCEAEA',
  padding: '12px',
  borderRadius: '8px',
  gap: '12px',
  margin: '8px 0',
}));

const FlexWrapper = styled('div')(({ gap }: { gap?: string }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: gap || '12px',
}));

export default AnimeDetailPage;
