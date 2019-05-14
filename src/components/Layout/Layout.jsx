import React, { Component } from 'react';
import Auxi from '../../hoc/Auxi';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Routes from '../../routes/routes';

const Layout = (props) =>
(
    <Auxi>
        <Header />
        <main style=
            {{ position: 'relative' }}
        >
            <Routes/>
        </main>
        <Footer />
    </Auxi>
)
export default Layout