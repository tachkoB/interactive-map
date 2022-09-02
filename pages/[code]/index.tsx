import { useRouter } from 'next/router';

const Country = () => {
  const {
    query: { code },
  } = useRouter();

  return <div>yellow</div>;
};

export default Country;
