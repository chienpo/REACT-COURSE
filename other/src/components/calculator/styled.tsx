import styled from 'styled-components'

export const CalculatorWrapper = styled.div`
    width: 496px;
    margin: 0 auto;
    background: white;
    border: 2px solid lightgrey;
    border-radius: 25px;
    overflow: hidden;
`

export const CalculatorControlls = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

export const Buttons = styled.div`
    width: 375px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    button:nth-child(10) {
        border-bottom-left-radius: 25px;
    }
`

export const CalculatorActions = styled.div`
    width: 125px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    button:nth-child(4) {
        border-bottom-right-radius: 25px;
    }
`

export const CalculatorDisplay = styled.div`
    width: 100%;
    height: 110px;
    display: flex;
    justify-content: center;
    align-items: center;

    input {
        text-align: right;
        padding: 5px 15px 0;
        width: 85%;
        margin-top: 20px;
        border: 1px solid: grey;
        font-size: 45px;
    }
`

export const Screen = styled.div`
    text-align: right;
    padding: 5px 15px 0;
    width: 85%;
    margin-top: 20px;
    border: 1px solid grey;
    background: rgba(100, 100, 100, .2);
    font-size: 45px;
`
