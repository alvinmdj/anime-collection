import { mq } from '@/utils/media-query';
import styled from '@emotion/styled';

type TContainerProps = {
  margin?: string;
};

const Container = styled.div((props: TContainerProps) => ({
  margin: props.margin,
  maxWidth: '500px',
  display: 'flex',
  flexDirection: 'column',
  marginInline: 'auto',
  [mq[1]]: {
    maxWidth: '700px',
  },
  [mq[2]]: {
    maxWidth: '900px',
  },
  [mq[3]]: {
    maxWidth: '1100px',
  },
}));

export default Container;
