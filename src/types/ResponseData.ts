import { Repo } from './Repo';

export interface ResponseData {
  incomplete_results: boolean;
  items: Repo[];
  total_count: number;
}
