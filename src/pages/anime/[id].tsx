import MainLayout from '@/components/Layout/MainLayout';
import { GET_ANIME_DETAIL } from '@/graphql/anime';
import { useQuery } from '@apollo/client';
import Image from 'next/image';
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
    <MainLayout>
      <Image
        src={animeDetail.data?.Media?.bannerImage || ''}
        alt={animeDetail.data?.Media?.title?.english || ''}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
      />
      <p>
        {animeDetail.data?.Media?.title?.english} (
        {animeDetail.data?.Media?.title?.romaji})
      </p>
      <p>{animeDetail.data?.Media?.description}</p>
      <button>Add to Collection</button>
    </MainLayout>
  );
};

export default AnimeDetail;
