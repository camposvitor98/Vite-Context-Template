import { BrowserRouter, Routes, Route } from "react-router-dom";

import { RepositoriesPage } from "pages/repositories";
import { HomePage } from "pages/home";

import { path } from "./Paths";

type RouterProps = {};

export function Router(props: RouterProps) {
  const {} = props;

  return (
    <BrowserRouter>
      <Routes>
        <Route path={path.HOME} element={<HomePage />} />

        <Route
          path={path.REPOSITORY + ":user"}
          element={<RepositoriesPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}
