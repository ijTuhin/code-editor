import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./pages/ErrorPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import WriteCodePage from "./pages/WriteCodePage.jsx";
import DevPage from "./pages/DevPage.jsx";
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
    element: <HomePage/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/write-code",
    element: <WriteCodePage/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/development",
    element: <DevPage/>,
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
