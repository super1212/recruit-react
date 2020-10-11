import React from "react";
import styled from "styled-components";
import {WingBlank, NavBar} from 'antd-mobile';
import { Link } from "react-router-dom";
import {AiOutlineArrowLeft } from "react-icons/ai";

const MenuPageContainer = styled.section`
    width: 100%;
    bottom: 0;
`;

const MenuPage = () => {
  return (
    <MenuPageContainer>
        <NavBar
            mode="light"
            leftContent={
                <Link to={"/"}><AiOutlineArrowLeft /> </Link>
            }
        >Menu</NavBar>

        <label>This is Menu content</label>
    </MenuPageContainer>

  );
};

export default MenuPage;
