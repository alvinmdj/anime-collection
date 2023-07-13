import { useRouter } from 'next/router';

const CollectionDetail = () => {
  const router = useRouter();

  return <div>{router.query.name}</div>;
};

export default CollectionDetail;
