import { useCallback, useEffect, useState } from "react";

import { githubApi } from "server/githubApi";

import * as Types from "./types";

import { createContext } from "use-context-selector";

export const RepositoriesContext = createContext(
  {} as Types.RepositoriesContext
);

export const RepositoriesProvider = (props: Types.RepositoriesProvider) => {
  const { children } = props;

  const [repositories, setRepositories] = useState({} as Types.Repository);

  const [loading, setLoading] = useState(false);

  const getRepositories = useCallback(async (gitUser) => {
    try {
      if (gitUser) {
        const { data: repos } = await githubApi(`/${gitUser}/repos`);
        const { data: user } = await githubApi(`/${gitUser}`);

        const newUser = {
          id: user.id,
          name: user.name,
          url: user.html_url,
        };

        const newRepo = repos.map(
          (repo: Types.Repos & { html_url: string }) => ({
            id: repo.id,
            name: repo.name,
            url: repo.html_url,
            description: repo.description,
          })
        );

        setRepositories({
          user: newUser,
          repos: newRepo,
        });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <RepositoriesContext.Provider
      value={{
        getRepositories,
        loading,
        setLoading,
        repositories,
        setRepositories,
      }}
    >
      {children}
    </RepositoriesContext.Provider>
  );
};
