import MainLayout from '@/components/Layout/MainLayout';
import AddAnimeModal from '@/components/Modal/AddAnimeModal';
import CollectionContext from '@/context/collection-context';
import { GET_ANIME_DETAIL } from '@/graphql/anime';
import { useQuery } from '@apollo/client';
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
      <div
        dangerouslySetInnerHTML={{
          __html: animeDetail.data?.Media?.description || '',
        }}
      />
      <button onClick={() => setShowModal(true)}>Add to Collection</button>
      {getAnimeCollections(animeDetail.data?.Media?.id || -1).map((col) => (
        <div key={col.id}>
          <p>{col.name}</p>
        </div>
      ))}
      <AddAnimeModal
        data={animeDetail.data}
        show={showModal}
        onClose={() => setShowModal(false)}
      />
    </MainLayout>
  );
};

export default AnimeDetail;
