import styled from 'styled-components'

export const Page = styled.div`
    background: white;
    width: 80%;
    margin: 0 auto;
`

export const Section = styled.div`
    max-width: 600px;
    margin: 0 auto;
    background: lightgrey;
    text-align: center;
    width: 100%;
`

export const PageCounter = styled.div`
    background: white;
    width: 40px;
    height: 20px;
    background: white;
    color: black;
    border-radius: 10px;
    text-align: center;
    line-height: 20px;
    margin: 0 auto;
    margin-top: 25px;
`

export const Controls = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    background: lightgrey;
    position: relative;

    button:last-child {
        margin-left: auto;
    }
`

export const ControlButton = styled.button`
    background: grey;
    color: white;
    font-weight: bold;
    width: 25%;
    height: 100%;
    cursor: pointer;

    &:hover {
        opacity: .8;
    }

    &.active {
        background: orangered;

        &:hover {
            opacity: 1;
        }
    }

    &:disabled {
        opacity: .4;
        cursor: not-allowed;
    }
`

export const Tabs = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    h1 {
        display: block;
        width: 100%;
        text-align: center;
        text-transform: uppercase;
    }

    label {
        cursor: pointer;
    }
`
