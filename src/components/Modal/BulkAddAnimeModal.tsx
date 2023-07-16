import { MediaSort } from '@/__generated__/graphql';
import CollectionContext from '@/context/collection-context';
import { GET_ANIME_LIST } from '@/graphql/anime';
import { useQuery } from '@apollo/client';
import styled from '@emotion/styled';
import { FormEvent, useContext, useEffect, useState } from 'react';
import Modal, { ModalFooter } from '.';
import Button from '../Button';
import Checkbox from '../Checkbox';
import Pagination from '../Pagination';
import SelectWithLabel from '../SelectWithLabel';
import LoadingSpinner from '../Spinner';
import ErrorMessage from '../Text/ErrorMessage';
import CreateCollectionModal from './CreateCollectionModal';

type TBulkAddAnimeModalProps = {
  show: boolean;
  onClose: () => void;
};

const BulkAddAnimeModal = ({ show, onClose }: TBulkAddAnimeModalProps) => {
  const { collections, isAnimeInCollection, addAnimeToCollection } =
    useContext(CollectionContext);

  const [error, setError] = useState('');
  const [selectedAnime, setSelectedAnime] = useState<
    {
      id: number;
      title: string;
      coverImage: string;
    }[]
  >([]);
  const [collectionId, setCollectionId] = useState('');
  const [page, setPage] = useState(1);

  const anime = useQuery(GET_ANIME_LIST, {
    variables: {
      page,
      perPage: 10,
      sort: MediaSort['PopularityDesc'],
    },
  });

  function handlePagination(type: 'PREV' | 'NEXT') {
    if (type === 'PREV' && page > 1) {
      setPage(page - 1);
    } else if (type === 'NEXT' && anime.data?.Page?.pageInfo?.hasNextPage) {
      setPage(page + 1);
    }
  }

  useEffect(() => {
    setError('');
    setCollectionId('');
    setSelectedAnime([]);
    setPage(1);
  }, [show]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (collectionId === '') {
      setError('Please choose a collection');
      return;
    }

    if (!selectedAnime.length) {
      setError('Please choose at least 1 anime');
      return;
    }

    let errorMessage = 'Anime ';
    let count = 0;
    selectedAnime.forEach((ani) => {
      if (isAnimeInCollection(ani.id, collectionId)) {
        errorMessage += !!count ? `'${ani.title}, '` : `'${ani.title}'`;
        count++;
      }
    });

    if (count > 5) {
      errorMessage =
        'More than 5 anime is already in this collection. Please uncheck it and try again';
      setError(errorMessage);
      return;
    } else if (!!count) {
      errorMessage += ' is already in collection. Please uncheck it';
      setError(errorMessage);
      return;
    }

    selectedAnime.forEach((ani) => {
      addAnimeToCollection({
        collectionId,
        id: ani.id,
        title: ani.title || 'No Title',
        coverImage: ani.coverImage || '',
      });
    });

    onClose();
  }

  function handleCheckboxChange(id: number, title: string, coverImage: string) {
    setSelectedAnime((prevState) => {
      const isIdChecked = prevState.some((anime) => anime.id === id);

      if (isIdChecked) {
        return prevState.filter((anime) => anime.id !== id);
      } else {
        return [...prevState, { id, title, coverImage }];
      }
    });
  }

  if (!collections.length) {
    return (
      <CreateCollectionModal
        title="Please create a collection before proceeds"
        show={show}
        onClose={onClose}
      />
    );
  }

  return (
    <Modal
      width="900px"
      show={show}
      onClose={onClose}
      title="Bulk add to collection"
    >
      <form onSubmit={handleSubmit}>
        <SelectWithLabel
          label="Choose a collection"
          defaultValue=""
          onChange={(e) => setCollectionId(e.target.value)}
        >
          <option disabled value="">
            Choose a collection
          </option>
          {collections.map((col) => (
            <option key={col.id} value={col.id}>
              {col.name}
            </option>
          ))}
        </SelectWithLabel>
        <p style={{ fontSize: '14px', margin: '10px 10px 10px' }}>
          Choose anime to add
        </p>
        {anime.loading && <LoadingSpinner />}
        {anime.error && (
          <p style={{ fontSize: '14px', margin: '10px 10px 10px' }}>
            Error! Please try again later.
          </p>
        )}
        {anime.data && (
          <AnimeListContainerModal>
            {anime.data?.Page?.media?.map((m) => (
              <div key={m?.id}>
                <Checkbox
                  id={m?.id.toString() || ''}
                  value={m?.id || 0}
                  checked={selectedAnime.some((anime) => anime.id === m?.id)}
                  onChange={() =>
                    handleCheckboxChange(
                      m?.id || 0,
                      m?.title?.english ||
                        m?.title?.romaji ||
                        m?.title?.native ||
                        '',
                      m?.coverImage?.large || ''
                    )
                  }
                >
                  {m?.title?.english ||
                    m?.title?.romaji ||
                    m?.title?.native ||
                    ''}
                </Checkbox>
              </div>
            ))}
          </AnimeListContainerModal>
        )}
        <Pagination
          handlePagination={handlePagination}
          currentPage={anime.data?.Page?.pageInfo?.currentPage || 1}
          hasNextPage={anime.data?.Page?.pageInfo?.hasNextPage || false}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <ModalFooter>
          <Button colorType="primary" type="submit">
            Add All
          </Button>
          <Button colorType="danger" type="button" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </form>
    </Modal>
  );
};

const AnimeListContainerModal = styled.div((props) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  overflowY: 'auto',
  height: '250px',
  margin: '10px',
}));

export default BulkAddAnimeModal;
