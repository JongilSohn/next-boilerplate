import AxiosInstance, { RequestMethod } from './AxiosInstance';

const api = {
  getTest: () => {
    return AxiosInstance(RequestMethod.GET, '/get');
  },
};

export default api;
