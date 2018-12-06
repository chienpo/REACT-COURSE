import React from 'react'
import styled from 'styled-components'

import Spinner from '../UI/Spinner'

const Article = styled.div`
    display: flex;
    justify-content: space-between;
    width: 47%;
    border: 1px solid lightgrey;
    border-radius: 10px;
    margin: 1%;    
`

const Description = styled.div`
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

const ImageHolder = styled.div`
    width: 30%;
    height: 100%;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        min-height: 300px;
    }
`

const ArticlesList = (props) => (
    <>
        <h1>{props.currentTab}</h1>

        {!props.loading && props.articles.length > 0 ? 
            props.articles.map(article => (
            <Article
                key={article.title}>
                <Description>
                    <h3>{article.title}</h3>
                    <p>{article.description}</p>
                </Description>
                <ImageHolder>
                    <img src={article.urlToImage} alt={article.urlToImage} />
                </ImageHolder>
            </Article>
        )) : <Spinner/>}
    </>
)

export default ArticlesList