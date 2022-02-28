import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { path } from "router/Paths";
import { Container } from "./styles";

type HomePageProps = { text?: string };

export const HomePage = (props: HomePageProps) => {
  const {} = props;
  const navigate = useNavigate();

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    navigate(path.REPOSITORY + e.target.elements.gitUser.value);
  }, []);

  return (
    <Container>
      <h1>Meus repositórios</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="gitUser">GitHub user:</label>
        <input type="text" name="gitUser" />

        <button type="submit">Buscar repositórios</button>
      </form>
    </Container>
  );
};
