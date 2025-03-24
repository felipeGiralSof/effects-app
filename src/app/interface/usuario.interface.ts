export interface Response {
  id: number,
  error: Error,
  loaded : boolean,
  loading: boolean,
  user: User[],
}

export interface Error {
  url: string;
  name: string;
  message: string;
}

export interface ResponseUsers {
  page:        number;
  per_page:    number;
  total:       number;
  total_pages: number;
  data:        User[];
  support:     Support;
}

export interface ResponseUser {
  page:        number;
  per_page:    number;
  total:       number;
  total_pages: number;
  data:        User;
  support:     Support;
}

export interface User {
  id:         number;
  email:      string;
  first_name: string;
  last_name:  string;
  avatar:     string;
}

export interface Support {
  url:  string;
  text: string;
}
