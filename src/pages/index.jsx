import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import styled from 'styled-components';
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

const PageGrid = styled.div`
  display: grid;
  ${'' /* grid-template-columns: [sidebar] 30% [main] auto; */}
`;

const MainGridItem = styled.div`
  grid-column-start: main;
`;

const SidebarGridItem = styled.div`
  grid-column-start: sidebar;
`;

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout location={this.props.location}>
        <PageGrid>
          <Helmet title={config.siteTitle} />
          <SEO />
          <h2>This website is under construction. Please contact me at my email in the mean time: bshudi@gmail.com</h2>

          {/* <SidebarGridItem />
          <MainGridItem>
            <PostListing postEdges={postEdges} />
          </MainGridItem> */}
        </PageGrid>
      </Layout>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
