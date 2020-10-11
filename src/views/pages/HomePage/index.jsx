import React from "react";
import styled from "styled-components";
import {AiOutlineMenu} from "react-icons/ai";
import { NavBar} from 'antd-mobile'
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import CreditCardModule from "./modules/CreditCardModule";
const HomePageContainer = styled.section`
    width: 100%;
    bottom: 0;
    .welcomeContent{
        width: 100%
        padding: 10px;
        align-text: center
    }
`;

const HomePage = () => {
  return (
    <HomePageContainer>
        <NavBar
            mode="light"
            leftContent={
                <Link to={"/menu"}><AiOutlineMenu /> </Link>
            }
        >Register card form</NavBar>

        <div className='welcomeContent'>Welcome</div>
        <CreditCardModule />
    </HomePageContainer>

  );
};

const mapStateToProps = (state) => ({
    currentUser: state['currentUser'],
    entities: state['entities']['creditCards'],
});


export default connect(mapStateToProps)(HomePage);
