import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const source = Axios.CancelToken.source();

const request = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 30000,
});

Axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

Axios.interceptors.request.use((config: AxiosRequestConfig) => {
  return {
    ...config,
    headers: undefined,
  };
});

Axios.interceptors.response.use(
  (response: AxiosResponse<any>) => {
    // const serverVersion = response.headers["access-control-client-version"];

    // if (Number(serverVersion) > Number(process.env.REACT_APP_VERSION)) {
    // window.location.reload
    // axios
    //   .get(window.location.href, {
    //     headers: {
    //       Pragma: "no-cache",
    //       "Cache-Control": "no-cache, max-age=3600", // 캐시 사용해도 되냐 확인
    //       Expires: -1,
    //     },
    //   })
    //   .then(() => {
    //     window.location.reload(true); // 페이지 로드 from 서버 브라우저 캐시가 아니라
    //   })
    //     .catch((err) => console.log(err, "err"));
    // }

    const resultCode = response.data.result_code;
    const resultMsg = response.data.result_msg;
    const { data } = response.data;
    if (!!data && typeof data === 'object') {
      data.resultMsg = resultMsg;
    }

    if (resultCode === '0000') {
      return data;
    } else if (resultCode === '-1000' || response.status === 401) {
      return Promise.reject(resultMsg || '로그인 정보가 올바르지 않습니다.');
    }
    return Promise.reject(resultMsg);
  },
  (error) => {
    return Promise.reject(error);
  },
);

export enum RequestMethod {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete',
  PATCH = 'patch',
}

export default async (method: RequestMethod, url: string, ...args: any[]) => {
  return (Axios[method] as Function)(url, ...args);
};

// export default request;
