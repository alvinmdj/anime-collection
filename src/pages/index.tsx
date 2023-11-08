import { MediaSort } from '@/__generated__/graphql';
import AnimeCard from '@/components/Anime/AnimeCard';
import AnimeListContainer from '@/components/Anime/AnimeListContainer';
import Button from '@/components/Button';
import Container from '@/components/Container';
import Layout from '@/components/Layout/MainLayout';
import LoadingSpinner from '@/components/LoadingSpinner';
import Pagination from '@/components/Pagination';
import Heading from '@/components/Text/Heading';
import { GET_ANIME_LIST } from '@/graphql/anime';
import { useQuery } from '@apollo/client';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useState } from 'react';

const BulkAddAnimeModal = dynamic(
  () => import('@/components/Modal/BulkAddAnimeModal')
);

export default function AnimeListPage() {
  const router = useRouter();

  const [showBulkAddModal, setShowBulkAddModal] = useState(false);

  const page = Number(router.query.page) || 1;

  const anime = useQuery(GET_ANIME_LIST, {
    variables: {
      page,
      perPage: 10,
      sort: MediaSort['PopularityDesc'],
    },
  });

  function handlePagination(type: 'PREV' | 'NEXT') {
    if (type === 'PREV' && page > 1) {
      router.query.page = (page - 1).toString();
    } else if (type === 'NEXT' && anime.data?.Page?.pageInfo?.hasNextPage) {
      router.query.page = (page + 1).toString();
    }

    router.push(router);
  }

  return (
    <>
      <Layout>
        <Container margin="20px 0">
          <Heading textCenter margin="0 0 20px 0">
            All-Time Popular Anime
          </Heading>
          <Button
            margin="0 5% 10px 5%"
            colorType="primary"
            onClick={() => setShowBulkAddModal(true)}
          >
            Bulk Add Anime to Collection
          </Button>
          {anime.loading && <LoadingSpinner />}
          {anime.error && (
            <p style={{ textAlign: 'center', margin: '10px' }}>
              {anime.error.message}
            </p>
          )}
          {anime.data && !!anime.data.Page?.media?.length && (
            <>
              <AnimeListContainer>
                {anime.data?.Page?.media?.map((m) => (
                  <AnimeCard
                    key={m!.id}
                    id={m!.id}
                    title={
                      m?.title?.english ||
                      m?.title?.romaji ||
                      m?.title?.native ||
                      ''
                    }
                    coverImage={m?.coverImage?.large || ''}
                  />
                ))}
              </AnimeListContainer>
              <Pagination
                handlePagination={handlePagination}
                currentPage={anime.data?.Page?.pageInfo?.currentPage || 1}
                hasNextPage={anime.data?.Page?.pageInfo?.hasNextPage || false}
              />
            </>
          )}
          {anime.data && !!!anime.data.Page?.media?.length && (
            <p style={{ textAlign: 'center' }}>No anime found.</p>
          )}
        </Container>
        <BulkAddAnimeModal
          show={showBulkAddModal}
          onClose={() => setShowBulkAddModal(false)}
        />
      </Layout>
    </>
  );
}
