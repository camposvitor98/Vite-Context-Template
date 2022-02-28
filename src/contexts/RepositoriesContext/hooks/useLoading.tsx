import { useContextSelector } from "use-context-selector";
import { RepositoriesContext } from "..";

export const useLoading = () => {
  const loading = useContextSelector(
    RepositoriesContext,
    (repos) => repos.loading
  );
  const setLoading = useContextSelector(
    RepositoriesContext,
    (repos) => repos.setLoading
  );

  return {
    loading,
    setLoading,
  };
};
