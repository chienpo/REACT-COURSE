import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

import Navigation from '../Navigation/Navigation'
import ArticlesList from './ArticlesList'

const Page = styled.div`
    background: white;
    width: 80%;
    margin: 0 auto;
`

const Section = styled.div`
    padding: 50px 0;
`

const TabButtons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;

    a {
        background: red;
        color: white;
    }
`

const Button = styled.button`
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

const Tabs = styled.div`
    display: flex;
    flex-wrap: wrap;

    h1 {
        display: block;
        width: 100%;
        text-align: center;
        text-transform: uppercase;
    }
`

const CATEGORIES = {
    'ECONOMY': 'economy',
    'INTERNET': 'internet',
    'COMPUTING': 'computing',
    'GADGETS': 'gadgets'
}

class TaskOne extends React.Component {
    state={
        loading: false,
        activeTab: CATEGORIES.ECONOMY,
        articles: []
    }

    componentDidMount() {
        this.loadPosts(CATEGORIES.ECONOMY)
    }

    loadPosts = async (articleName) => {
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
        } catch (e) {}
    }

    render() {
        return(
            <Page>
                <Navigation />
                <TabButtons>
                    {Object.keys(CATEGORIES).map(category => (
                        <Button
                            disabled={this.state.activeTab === category.toLowerCase()}
                            className={this.state.activeTab === category.toLowerCase() && 'active'}
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