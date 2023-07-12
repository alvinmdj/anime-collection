import { mq } from '@/utils/media-query';
import styled from '@emotion/styled';

const AnimeListContainer = styled.div((props) => ({
  marginTop: '10px',
  marginBottom: '10px',
  marginInline: '5%',
  display: 'grid',
  gap: '20px',
  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  [mq[2]]: {
    // marginInline: '10%',
    gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
  },
}));

export default AnimeListContainer;
