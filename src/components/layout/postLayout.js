import React, { Component } from 'react';
import { graphql, Link  } from 'gatsby';
import RecipesLayout from './recipesLayout';

import './postLayout.css';
import './layout.css'

export default class postLayout extends Component {
  render() {
    const { markdownRemark } = this.props.data;
    const { location } = this.props;
    return (
      <>
        <RecipesLayout location={location}>
          <h1 className="markdownTitle">{markdownRemark.frontmatter.title}</h1>
    
            <div className="markdownContainer" dangerouslySetInnerHTML={{
              __html: markdownRemark.html,
            }}
            />
            <Link to='/recipes'>Go Back</Link>
        </RecipesLayout>
      </>
    );
  }
}

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: {
      slug: {
        eq: $slug
      }
    }) {
      html
      frontmatter {
        title
        date
        slug
      }
    }
  }
`;