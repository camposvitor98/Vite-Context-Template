import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  flex-direction: column;
  gap: 2rem;

  h1 {
    color: ${({ theme }) => theme.colors.secondary};
  }

  form {
    display: flex;
    flex-direction: column;
    width: 20%;

    gap: 0.5rem;

    input {
      padding: 0.25rem 0.75rem;
      border-radius: 0.5rem;
    }

    button {
      padding: 0.25rem 0.75rem;
      border-radius: 0.5rem;
      border: 1px solid;
      margin-top: 1.5rem;
    }
  }
`;
