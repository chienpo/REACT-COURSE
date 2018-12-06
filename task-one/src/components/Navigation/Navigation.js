import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Menu = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;
    width: 300px;
    background: rgba(1, 1, 1, .8);
    padding: 20px;
`

const BurgerMenu = styled.button`
    position: fixed;
    left: 20px;
    top: 20px;
    z-index: 20;
    background: orangered;
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    cursor: pointer;
    color: white;
    font-weight: bold;

    &:hover {
        opacity: .8;
    }
`

const NavigationItem = styled.div`
    border: 1px solid grey;
    background: orangered;
    width: 100%;
    margin: 20px 0
    text-transform: uppercase;
    cursor: pointer;
    outline: none;
    font-weight: 900;
    color: white;
    display: block;
    text-decoration: none;
    text-align: center;
    position: relative;

    &:first-child {
        margin-bottom: 100px;
        margin-top: 100px;
    }

    &.not-ready {
        cursor: not-allowed;
        border-color: red;
        background: red;
        opacity: .6;

        a {
            cursor: not-allowed;
        }
    }

    &:focus {
        opacity: .5;
        color: black;
    }

    a {
        font-weight: 900;
        color: white;
        display: block;
        text-decoration: none;
        text-align: center;
        padding: 40px 0;
    }
`

class Navigation extends React.Component {
    state={
        menuIsOpened: false
    }

    toggleMenu = () => {
        this.setState({menuIsOpened: !this.state.menuIsOpened})
    }
    
    renderMenu = () => (
        <Menu>
            <NavigationItem
                onClick={this.toggleMenu}>
                <Link to='/'>Main</Link>
            </NavigationItem>
            <NavigationItem
                onClick={this.toggleMenu}>
                <Link to='/task-one'>TaskOne</Link>
            </NavigationItem>
            <NavigationItem
                className='not-ready'>
                <Link to='/task-two'  onClick={e => e.preventDefault()}>TaskTwo</Link>
            </NavigationItem>
        </Menu>
    )

    render() {
        return(
            <>
                <BurgerMenu
                    onClick={this.toggleMenu}>X</BurgerMenu>
                    
                {this.state.menuIsOpened && this.renderMenu()}
            </>
        )
    }
}

export default Navigation
