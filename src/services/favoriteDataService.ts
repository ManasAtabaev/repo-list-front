import http from '@/api/http-backend';
import { Repo } from '@/types';

export const favoriteDataService = {
  get,
  create,
};

function get(): Promise<any> {
  return http.get('/favorite');
}

function create(data: Repo): Promise<any> {
  return http.post('/favorite', data);
}
