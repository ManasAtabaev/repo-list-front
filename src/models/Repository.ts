import { Repo } from '@/types';

export class Repository implements Repo {
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

  constructor(data: Repo) {
    this.id = data.id;
    this.node_id = data.node_id;
    this.name = data.name;
    this.full_name = data.full_name;
    this.html_url = data.html_url;
    this.description = data.description;
    this.owner = {
      login: data.owner.login,
      id: data.owner.id,
      html_url: data.owner.html_url,
    };
    this.size = data.size;
  }

  estDownloadTime(): number {
    return 2;
  }
}
