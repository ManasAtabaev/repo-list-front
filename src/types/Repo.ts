export interface Repo {
  id: Number;
  node_id: String;
  name: String;
  full_name: String;
  description: String;
  owner: {
    login: String;
    id: Number;
  };
  size: Number;
}
