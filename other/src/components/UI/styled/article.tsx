import styled from 'styled-components'

export const Article = styled.div`
    display: flex;
    justify-content: space-between;
    width: 47%;
    border: 1px solid lightgrey;
    border-radius: 10px;
    margin: 1%;    
`

export const Description = styled.div`
    padding: 20px;
    width: 70%;

    h3 {
        margin-bottom: 20px;
        font-weight: 700;
    }

    p {
        font-weight: 300;
    }
`

export const ImageHolder = styled.div`
    width: 30%;
    height: 100%;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        min-height: 300px;
    }
`
