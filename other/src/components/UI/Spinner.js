import React from 'react'
import styled from 'styled-components'

const Loader = styled.div`
    display: flex;
    width: 100%;
    height: 95vh;
    justify-content: center;
    align-items: center;

    .spinner {
        border: 16px solid #f3f3f3;
        border-top: 16px solid grey;
        border-radius: 50%;
        width: 200px;
        height: 200px;
        animation: spin .4s linear infinite;
    }
`

const Preloader = styled.div`
    border: 16px solid #f3f3f3;
    border-top: 16px solid grey;
    border-radius: 50%;
    width: 200px;
    height: 200px;
    animation: spin .4s linear infinite;
`

const Spinner = () => (
    <Loader>
        <Preloader />
    </Loader>
)

export default Spinner
