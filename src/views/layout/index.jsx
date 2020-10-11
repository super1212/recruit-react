import React from "react";
import { NavBar, Icon } from 'antd-mobile';

import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MenuPage from "../pages/MenuPage";
import { connect } from "react-redux";

const PageContainer = styled.section`
  height: 100%;
  position: absolute
  width:100%;
  .ant-layout-header {
    text-align: right;
  }
  .logo {
    cursor: pointer;
    padding: 5px 0;
    text-align: center;
    float: left;
    a {
      font-size: 2rem;
      opacity: 80%;
      :hover {
        opacity: 100%;
      }
    }
  }
`;

const MainPage = (props) => {
  return (
    <PageContainer>
        <Router>
          <Switch>
            <Route exact path="/" >
              <HomePage />
            </Route>
            <Route path="/menu">
              <MenuPage />
            </Route>
          </Switch>
        </Router>
    </PageContainer>
  );
};

const mapStateToProps = (state) => ({
  router: state['router'],
});


export default connect(mapStateToProps)(MainPage);
