import http from '@/api/http-github';
import { ResponseData, Params } from '@/types';

export const RepoDataService = {
  getAll,
};

function getAll(params: Params): Promise<any> {
  return http.get<ResponseData>('/search/repositories', { params });
}
