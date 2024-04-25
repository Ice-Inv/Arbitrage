import axios from "axios";
import {stringify} from 'qs';

export const iceService = axios.create();

iceService.interceptors.request.use(
  (request) => {
    request.paramsSerializer = (params) => {
      return stringify(params, {arrayFormat: 'repeat'})
    }

    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
)