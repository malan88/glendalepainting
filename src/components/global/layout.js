import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import * as reset from '../../styles/reset.css';
import * as global from '../../styles/global.css';
import { Header } from './header';
import { Footer } from './footer';

const GlobalStyle = createGlobalStyle`
    ${reset}
    ${global}
`;

const MainScroll = styled.main`
    margin-top: 10rem;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow-y: scroll;
`;

const MainNoScroll = styled.main`
    display: grid;
    grid-template-rows: 9.6rem auto;
`;

export const LayoutScroll = ({ children }) => {
    return (
        <>
            <GlobalStyle />
            <Header siteTitle="Glendale Painting" />
            <MainScroll>
                <div />
                {children}
                <Footer />
            </MainScroll>
        </>
    );
};

export const Layout = ({ children }) => {
    return (
        <>
            <GlobalStyle />
            <Header siteTitle="Glendale Painting" />
            <MainNoScroll>
                <div />
                {children}
                <Footer />
            </MainNoScroll>
        </>
    );
};
