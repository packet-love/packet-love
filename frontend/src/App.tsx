import React from 'react';
import './App.css';
import styled from "styled-components";
import {RouterProvider} from "react-router-dom";
import routes from "./router/routes";
import AppHeader from "./components/app-header";
import {RecoilRoot} from "recoil";
import {ConfigProvider} from "antd";

const BackgroundContainer = styled.div`
  background-color: #ffc7e3;
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
  overflow-y: scroll;
`;

const App = () => (
  <RecoilRoot>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#f566af',
          colorPrimaryHover: '#f566af',
        }
      }}
    >
      <BackgroundContainer>
        <SafeArea>
          <React.StrictMode>
            <AppHeader/>
            <RouterProvider router={routes}/>
          </React.StrictMode>
        </SafeArea>
      </BackgroundContainer>
    </ConfigProvider>
  </RecoilRoot>
);

export default App;
