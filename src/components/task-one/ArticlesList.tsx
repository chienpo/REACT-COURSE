import React from 'react'

import Spinner from '../UI/Spinner'
import { Article, Description, ImageHolder } from './styled/'


interface IArticle {
    title: string;
    description: string;
    urlToImage: string;
}

interface IArticlesListProps {
    currentTab: string;
    articles: IArticle[];
    loading: boolean;
}


const ArticlesList: (props: IArticlesListProps) => JSX.Element = ( props ) => {
    const { currentTab, articles, loading } = props

    return (
        <>
            <h1>{currentTab}</h1>

            {!loading && articles.length > 0 ? 
                articles.map((article) => (
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
}

export default ArticlesList
