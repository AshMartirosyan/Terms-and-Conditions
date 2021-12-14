import React from "react";
import "./App.css";
import styled from "styled-components";
import TermsComponent from "./Terms";
import PrivacyComponent from "./Privacy";

const BaseComponent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  margin-left: auto;
  margin-right: auto;
  max-width: 940px;
  padding: 95px 20px 275px;
`;

const TextComponent = styled.div`
  dispaly: flex;
  flex: 1;
  flex-direction: column;
  color: rgba(10, 6, 60, 0.83);
  font-size: 17px;
  font-weight: 400;
  margin-top: 0;
  margin-bottom: -196px;
  padding-right: 0;
  padding-bottom: 0;
  padding-left: 0;
  width: 67%;
`;

function App() {
  return (
    <BaseComponent>
      <TextComponent>
        <TermsComponent />
        <PrivacyComponent />
      </TextComponent>
    </BaseComponent>
  );
}

export default App;
