import { mq } from '@/utils/media-query';
import styled from '@emotion/styled';

type THeadingProps = {
  textCenter?: boolean;
  margin?: string;
};

const Heading = styled.h1((props: THeadingProps) => ({
  textAlign: props.textCenter ? 'center' : 'unset',
  margin: props.margin,
  fontSize: '20px',
  [mq[1]]: {
    fontSize: '24px',
  },
  [mq[2]]: {
    fontSize: '28px',
  },
  [mq[3]]: {
    fontSize: '32px',
  },
}));

export default Heading;
