export interface Repo {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  html_url: string;
  description: string;
  owner: {
    login: string;
    id: number;
    html_url: string;
  };
  size: number;
  estDownloadTime(): number;
}
