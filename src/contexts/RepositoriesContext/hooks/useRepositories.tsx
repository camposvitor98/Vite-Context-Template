import { useContextSelector } from "use-context-selector";
import { RepositoriesContext } from "..";

export const useRepositories = () => {
  const getRepositories = useContextSelector(
    RepositoriesContext,
    (repos) => repos.getRepositories
  );
  const repositories = useContextSelector(
    RepositoriesContext,
    (repos) => repos.repositories
  );
  const setRepositories = useContextSelector(
    RepositoriesContext,
    (repos) => repos.setRepositories
  );

  return {
    getRepositories,
    repositories,
    setRepositories,
  };
};
