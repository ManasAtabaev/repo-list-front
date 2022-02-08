export interface Repo {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  description: string;
  owner: {
    login: string;
    id: number;
  };
  size: number;
}
