import { useCallback, useEffect } from "react";
import { Container } from "./styles";
import { useParams } from "react-router-dom";
import { useRepositories } from "contexts/RepositoriesContext/hooks/useRepositories";
import { useLoading } from "contexts/RepositoriesContext/hooks/useLoading";

type RepositoriesPageProps = {};

export const RepositoriesPage = (props: RepositoriesPageProps) => {
  const {} = props;

  const { loading, setLoading } = useLoading();
  const { getRepositories, repositories } = useRepositories();

  const { user, repos } = repositories;

  const { user: slugUser } = useParams();

  useEffect(() => {
    getRepositories(slugUser || "");
    setLoading(true);
  }, [slugUser]);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <Container>
      {user && <a href={user.url}>{user.name}</a>}
      <h1>Repositórios</h1>
      <ul>
        {repos && repos.map((repo) => <InnerCard key={repo.id} repo={repo} />)}
      </ul>
    </Container>
  );
};

const InnerCard = (props: any) => {
  const { repo } = props;
  const { setRepositories } = useRepositories();

  const removeRepository = useCallback((item) => {
    setRepositories((state) => ({
      ...state,
      repos: state.repos.filter((repo) => repo.id !== item),
    }));
  }, []);

  return (
    <li>
      <a href={repo.url}>{repo.name}</a>
      <p>{repo.description}</p>
      <button onClick={() => removeRepository(repo.id)}>remove</button>
    </li>
  );
};
