import React from 'react';

import ArticleList from './ArticleList';

import DataAPI from '../DataAPI';
import { data } from '../testData';

const api = new DataAPI(data);

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            articles: api.getArticles(),
            authors: api.getAuthors()
        };
    }

    articleActions = {
        lookUpAuthor: authorId => this.state.authors[authorId],
    }

    render() {
        return (
            <ArticleList articles={this.state.articles} articleActions={this.articleActions} />
        );
    }
}

export default App;