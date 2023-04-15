import React from 'react';
import './App.css';
import styled from "styled-components";
import {RouterProvider} from "react-router-dom";
import routes from "./router/routes";
import AppHeader from "./components/app-header";

const BackgroundContainer = styled.div`
  background-color: hotpink;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const SafeArea = styled.div`
  width: 100%;
  max-width: 600px;
  height: 100vh;
  margin: 0 auto;
  background-color: #fafafa;
  overflow: hidden;
`;

const App = () => (
  <BackgroundContainer>
    <SafeArea>
      <React.StrictMode>
        <AppHeader />
        <RouterProvider router={routes} />
      </React.StrictMode>
    </SafeArea>
  </BackgroundContainer>
);

export default App;
