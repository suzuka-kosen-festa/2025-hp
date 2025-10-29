import { CssBaseline } from "@mui/material";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router";
import OrbitThemeProvider from "./Components/OrbitThemeProvider";

const router = createBrowserRouter([
  {
    Component: () => (
      <>
        <ScrollRestoration />
        <Outlet />
      </>
    ),
    children: [
      {
        path: "/",
        lazy: async () => ({
          Component: (await import("./pages/Home"))?.default,
        }),
      },
      {
        path: "/events",
        lazy: async () => ({
          Component: (await import("./pages/events"))?.default,
        }),
      },
      {
        path: "/bazaar",
        lazy: async () => ({
          Component: (await import("./pages/bazaar"))?.default,
        }),
      },
      {
        path: "/privacy",
        lazy: async () => ({
          Component: (await import("./pages/privacy"))?.default,
        }),
      },
      {
        path: "*",
        lazy: async () => ({
          Component: (await import("./pages/NotFound"))?.default,
        }),
      },
    ],
  },
]);

export function mountApp(rootElement: HTMLElement) {
  const root = createRoot(rootElement);

  // レスポンシブ対応のためのviewport設定を動的に追加
  // viewportメタタグが存在しない場合は追加
  if (!document.querySelector("meta[name=\"viewport\"]")) {
    const viewport = document.createElement("meta");
    viewport.name = "viewport";
    viewport.content
      = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no";
    document.head.appendChild(viewport);
  }

  // レスポンシブ対応のためのCSS変数を設定
  const setResponsiveVariables = () => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    document.documentElement.style.setProperty("--vw", `${vw}px`);
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    document.documentElement.style.setProperty("--vw-unit", `${vw / 100}px`);
    document.documentElement.style.setProperty("--vh-unit", `${vh / 100}px`);
  };

  setResponsiveVariables();
  window.addEventListener("resize", setResponsiveVariables);

  root.render(
    <StrictMode>
      <OrbitThemeProvider>
        <CssBaseline>
          <RouterProvider router={router} />
        </CssBaseline>
      </OrbitThemeProvider>
    </StrictMode>,
  );
}
