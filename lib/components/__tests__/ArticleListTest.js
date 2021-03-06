import React from 'react';
import ArticleList from '../ArticleList';

import renderer from 'react-test-renderer';
import { expect } from '@jest/globals';

const testProps = {
    articles: {
        a: { id: 'a' },
        b: { id: 'b' },
    },
    store:  {
        lookUpAuthor: jest.fn(() => ({})),
    },
};

test('renders correctly', () => {
    const tree = renderer.create(
        <ArticleList
            {...testProps}
        />

    ).toJSON();

    expect(tree.children.length).toBe(2);
    expect(tree).toMatchSnapshot();
});