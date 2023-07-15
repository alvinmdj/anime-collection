import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';

type TAnimeCardProps = {
  id: number;
  title: string;
  coverImage: string;
};

const AnimeCard = ({ id, title, coverImage }: TAnimeCardProps) => {
  return (
    <Link href={`/anime/${id}`}>
      <AnimeCardDiv title={title}>
        <AnimeCardImage
          src={coverImage}
          alt={title}
          width={150}
          height={225}
          sizes="100vw"
          priority
        />
        <AnimeCardTitle>{title}</AnimeCardTitle>
      </AnimeCardDiv>
    </Link>
  );
};

const AnimeCardDiv = styled.div((props) => ({
  borderRadius: '8px',
  fontSize: '14px',
  fontWeight: 'bold',
}));

const AnimeCardImage = styled(Image)((props) => ({
  width: '100%',
  height: 'auto',
  aspectRatio: '2/3',
  objectFit: 'cover',
  borderRadius: '8px',
}));

const AnimeCardTitle = styled.p((props) => ({
  display: '-webkit-box',
  WebkitLineClamp: '2',
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
}));

export default AnimeCard;
