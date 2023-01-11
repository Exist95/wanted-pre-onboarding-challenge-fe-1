import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./components/Router/index";
import GlobalStyle from "./styles/GlobalStyle";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <GlobalStyle />
        <Router />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
