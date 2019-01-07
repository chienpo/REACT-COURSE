import React from 'react'
import axios from 'axios'

import Navigation from '../Navigation/Navigation'
import ArticlesList from './ArticlesList'
import { Button } from './styled'
import { Page, Section, TabButtons, Tabs } from './styled'

interface ITaskOneState {
    loading: boolean;
    activeTab: string;
    articles: IArticle[];
}

interface IArticle {
    title: string;
    description: string;
    urlToImage: string;
}

interface ICategories {
    [key: string]: string;
}

const CATEGORIES: ICategories = {
    'ECONOMY': 'economy',
    'INTERNET': 'internet',
    'COMPUTING': 'computing',
    'GADGETS': 'gadgets'
}

class TaskOne extends React.Component  < {}, ITaskOneState> {
    state = {
        loading: false,
        activeTab: CATEGORIES.ECONOMY,
        articles: []
    }

    componentDidMount() {
        this.loadPosts(CATEGORIES.ECONOMY)
    }

    loadPosts = async (articleName: string) => {
        try {
            this.setState({
                activeTab: articleName,
                loading: true
            })

            const response = await axios.get(`https://js-news-5e08b.firebaseio.com/${articleName}.json`)

            this.setState({
                articles: response.data,
                loading: false
            })
        } catch (e) { }
    }

    render() {
        return (
            <Page>
                <Navigation />
                <TabButtons>
                    {Object.keys(CATEGORIES).map(category => (
                        <Button
                            disabled={this.state.activeTab === category.toLowerCase()}
                            className={this.state.activeTab === category.toLowerCase() ? 'active' : ''}
                            key={category}
                            onClick={() => this.loadPosts(CATEGORIES[category])}
                        >{category}
                        </Button>
                    ))}
                </TabButtons>
                <Section>
                    <Tabs>
                        <ArticlesList
                            currentTab={this.state.activeTab}
                            articles={this.state.articles}
                            loading={this.state.loading}
                        />
                    </Tabs>
                </Section>
            </Page>
        )
    }
}

export default TaskOne
