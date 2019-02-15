import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Container from 'react-bootstrap/Container';
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

const MenuWrapper = styled.div`
        width: 100%;
        height: 89px;
        padding: 20px;
`

class App extends Component {
  render() {
    return (
        <div className='App'>
            <HeaderWrapper>
                <Container>
                    <Header />
                </Container>
            </HeaderWrapper>
            <MenuWrapper>
                <Container>
                    <Menu />
                </Container>
            </MenuWrapper>
            <Main />
        </div>
    );
  }
}


export default App;
