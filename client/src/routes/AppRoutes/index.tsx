import { ROUTER_PATH } from "helpers/constants";
import { lazy } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import { AuthLayout } from "layout/AuthLayout";
import { ErrorBoundary } from "layout/ErrorBoundary";
import { MainLayout } from "layout/MainLayout";
import { AuthenticationRoute } from "routes/AuthenticationRoute";
import { PrivateRoute } from "routes/PrivateRoute";

const ArticlesPage = lazy(() => import("features/articles/ArticlesPage"));
const PageNotFound = lazy(() => import("routes/PageNotFound"));

export const AppRoutes = () => {
  const location = useLocation();

  const routes = useRoutes([
    {
      element: <PrivateRoute />,
      children: [
        {
          element: <MainLayout />,
          children: [
            {
              path: ROUTER_PATH.ARTICLES,
              element: <ArticlesPage />
            }
          ]
        }
      ]
    },
    {
      element: <AuthenticationRoute />,
      children: [
        {
          element: <AuthLayout />,
          children: []
        }
      ]
    },
    {
      path: ROUTER_PATH.NOT_FOUND,
      element: <PageNotFound />
    }
  ]);

  return <ErrorBoundary key={location.pathname}>{routes}</ErrorBoundary>;
};
