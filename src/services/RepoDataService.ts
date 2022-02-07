import http from '@/http-common';

export const RepoDataService = {
  getAll,
};

function getAll(params: any): Promise<any> {
  return http.get('/search/repositories', { params });
}
