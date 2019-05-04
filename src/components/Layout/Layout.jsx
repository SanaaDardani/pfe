import React, { Component } from 'react';
import Auxi from '../../hoc/Auxi';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import HomePage from './../../containers/HomePage/HomePage';

const Layout = (props) =>
(
    <Auxi>
            <Header />
            <main>
                <HomePage />
            </main>
        <Footer />
    </Auxi>
)
export default Layout