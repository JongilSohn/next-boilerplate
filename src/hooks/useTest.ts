import useSWR from 'swr';
import api from '../api/api';

const fetcher = (url) => fetch(url).then((r) => r.json());

const useTest = () => {
  const { data, error } = useSWR(`/get`, fetcher);

  console.log(data);

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useTest;
