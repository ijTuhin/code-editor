import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./pages/ErrorPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import WriteCodePage from "./pages/WriteCodePage.jsx";
import DevPage from "./pages/DevPage.jsx";
import ProblemSolvingPage from "./pages/ProblemSolvingPage.jsx";
import Home from "./components/Home/Home.jsx";
import DevMainUI from "./components/IDE/Dev/DevMainUI.jsx";
import EditorPage from "./pages/EditorPage.jsx";
import CreateSectionUI from "./components/IDE/Create/CreateSectionUI.jsx";
// Extend theme of Chakra
// import { extendTheme } from '@chakra-ui/react'
// const colors = {
//   brand: {
//     900: '#1a365d',
//     800: '#153e75',
//     700: '#2a69ac',
//   },
// }

// const theme = extendTheme({ colors })

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    // element: <Home />,
    // element: <DevMainUI />,
    errorElement: <ErrorPage />,
    children:[
      {
        index: true,
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "dev",
        element: <DevMainUI />,
        errorElement: <ErrorPage />,
      },
    ]
  },
  {
    path: "/editor",
    element: <WriteCodePage />,
    // element: <EditorPage />,
    // element: <CreateSectionUI />,
    // element: <DevMainUI />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/write-code",
    element: <WriteCodePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/development",
    element: <DevPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/problem-solving",
    element: <ProblemSolvingPage />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
