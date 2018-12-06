import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Navigation from '../Navigation/Navigation'

const NavigationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

const NavigationItem = styled.div`
    border: 1px solid grey;
    background: orangered;
    width: 60%;
    margin: 20px 0
    text-transform: uppercase;
    cursor: pointer;
    outline: none;

    &:disabled {
        color: white;
    }

    &:hover {
        opacity: .8;
        transition: all ease-in-out .2s;
    }

    &:focus {
        opacity: .5;
        color: black;
    }

    &.not-ready {
        cursor: not-allowed;
        border-color: red;
        background: red;
        opacity: .2;
    }

    a {
        font-weight: 900;
        color: white;
        display: block;
        padding: 20px;
        text-decoration: none;
        text-align: center;
    }
`

class CourseList extends React.Component {
    state={}

    render() {
        return(
            <>
                <Navigation />
                <NavigationWrapper>
                    <NavigationItem>
                        <Link
                            to='/task-one'>TaskOne</Link>
                    </NavigationItem>
                    <NavigationItem className='not-ready'>
                        <Link
                            to='/task-two'>TaskOne</Link>
                    </NavigationItem>
                </NavigationWrapper>
            </>
        )
    }
}

export default CourseList
