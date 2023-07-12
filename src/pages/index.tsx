import { MediaSort } from '@/__generated__/graphql';
import AnimeCard from '@/components/Anime/AnimeCard';
import AnimeListContainer from '@/components/Anime/AnimeListContainer';
import Layout from '@/components/Layout/MainLayout';
import { GET_ANIME_LIST } from '@/graphql/anime';
import { useQuery } from '@apollo/client';
import { Inter } from 'next/font/google';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const router = useRouter();

  const [page, setPage] = useState(1);

  const anime = useQuery(GET_ANIME_LIST, {
    variables: {
      page: Number(router.query.page) || page,
      perPage: 10,
      sort: MediaSort['PopularityDesc'],
    },
  });

  useEffect(() => {
    setPage(Number(router.query.page) || 1);
  }, [router.query.page]);

  function handlePagination(type: 'PREV' | 'NEXT') {
    if (type === 'PREV' && page > 1) {
      setPage(page - 1);
      router.query.page = (page - 1).toString();
    } else if (type === 'NEXT' && anime.data?.Page?.pageInfo?.hasNextPage) {
      setPage(page + 1);
      router.query.page = (page + 1).toString();
    }

    router.push(router);
  }

  return (
    <>
      <Layout>
        <h1>All-Time Popular Anime</h1>
        <AnimeListContainer>
          {anime.loading && <p>Loading...</p>}
          {anime.error && <p>Error!</p>}
          {anime.data?.Page?.media?.map((m) => (
            <AnimeCard
              key={m?.id}
              id={m!.id}
              title={m?.title}
              coverImage={m?.coverImage}
            />
          ))}
        </AnimeListContainer>
        <div>
          <button onClick={() => handlePagination('PREV')}>prev</button>
          <button onClick={() => handlePagination('NEXT')}>next</button>
        </div>
      </Layout>
    </>
  );
}
