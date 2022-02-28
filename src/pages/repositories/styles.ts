import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;

  padding: 3rem 5%;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  flex-direction: column;
  gap: 2rem;

  a {
    font-size: 1.5rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.secondary};

    &:hover {
      text-decoration: underline;
    }
  }

  h1 {
    color: ${({ theme }) => theme.colors.secondary};
  }

  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;

    li {
      display: flex;
      flex-flow: column;
      gap: 0.75rem;

      border: 1px solid;
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
    }
  }
`;
