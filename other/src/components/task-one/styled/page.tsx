import styled from 'styled-components'

export const Page = styled.div`
    background: white;
    width: 80%;
    margin: 0 auto;
`

export const Section = styled.div`
    padding: 50px 0;
`

export const TabButtons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;

    a {
        background: red;
        color: white;
    }
`

export const Tabs = styled.div`
    display: flex;
    flex-wrap: wrap;

    h1 {
        display: block;
        width: 100%;
        text-align: center;
        text-transform: uppercase;
    }
`