import { GetAnimeListQuery } from '@/__generated__/graphql';
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';

const AnimeCardDiv = styled.div((props) => ({
  borderRadius: '8px',
  fontSize: '14px',
  fontWeight: 'bold',
}));

const AnimeCardTitle = styled.p((props) => ({
  display: '-webkit-box',
  WebkitLineClamp: '2',
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
}));

const AnimeCard = (
  props: NonNullable<NonNullable<GetAnimeListQuery['Page']>['media']>[number]
) => {
  return (
    <Link key={props?.id} href={`/anime/${props?.id}`}>
      <AnimeCardDiv>
        <Image
          src={props?.coverImage?.large || ''}
          alt={
            props?.title?.english ||
            props?.title?.romaji ||
            props?.title?.native ||
            ''
          }
          width={75}
          height={150}
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
            minHeight: '100%',
            objectFit: 'cover',
            borderRadius: '8px',
          }}
        />
        <AnimeCardTitle>
          {props?.title?.english ||
            props?.title?.romaji ||
            props?.title?.native}
        </AnimeCardTitle>
      </AnimeCardDiv>
    </Link>
  );
};

export default AnimeCard;
