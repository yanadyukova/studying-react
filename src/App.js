import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/Grid';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';

import Header from './components/Header';
import Menu from './components/Menu';
import Main from './components/Main';

const HeaderWrapper = styled.header`
        width: 100%;
        height: 49px;
        background-color: #242424;
        opacity: 0.8;
`

class App extends Component {
  render() {
    return (
        <div className='App'>
            <HeaderWrapper>
                <Grid>
                    <Header />
                </Grid>
            </HeaderWrapper>
            <Menu />
            <Main />
        </div>
    );
  }
}


export default App;