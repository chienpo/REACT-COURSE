import styled from 'styled-components'

export const Button = styled.button`
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
`

export const CButton = styled.button`
    background: white;
    color: grey;
    font-weight: bold;
    width: 124px;
    height: 80px;
    cursor: pointer;
    font-size: 45px;

    &:hover {
        opacity: .8;
    }

    &.active {
        background: orangered;

        &:hover {
            opacity: 1;
        }
    }
`
