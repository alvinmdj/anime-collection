import { GET_ANIME_DETAIL } from '@/graphql/anime';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';

const AnimeDetail = () => {
  const router = useRouter();

  const animeDetail = useQuery(GET_ANIME_DETAIL, {
    variables: {
      id: Number(router.query.id),
    },
  });

  if (animeDetail.loading) {
    return <p>Loading...</p>;
  }

  if (animeDetail.error) {
    return <p>Error!!</p>;
  }

  return (
    <div>
      <p>
        {animeDetail.data?.Media?.title?.english} (
        {animeDetail.data?.Media?.title?.romaji})
      </p>
      <p>{animeDetail.data?.Media?.description}</p>
    </div>
  );
};

export default AnimeDetail;
