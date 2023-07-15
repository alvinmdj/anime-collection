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

type TAnimeCardProps = {
  id: number;
  title: string;
  coverImage: string;
};

const AnimeCard = ({ id, title, coverImage }: TAnimeCardProps) => {
  return (
    <Link href={`/anime/${id}`}>
      <AnimeCardDiv>
        <Image
          src={coverImage}
          alt={title}
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
          priority
        />
        <AnimeCardTitle>{title}</AnimeCardTitle>
      </AnimeCardDiv>
    </Link>
  );
};

export default AnimeCard;
