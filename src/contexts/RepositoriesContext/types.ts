import { Dispatch, ReactElement, SetStateAction } from "react";

export type User = {
  id: string;
  name: string;
  url: string;
};

export type Repos = {
  id: string;
  name: string;
  url: string;
  description?: string;
};

export type Repository = {
  user: User;
  repos: Repos[];
};

export type RepositoriesContext = {
  getRepositories: (user: string) => void;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  repositories: Repository;
  setRepositories: Dispatch<SetStateAction<Repository>>;
};

export type RepositoriesProvider = {
  children: ReactElement | ReactElement[];
};
