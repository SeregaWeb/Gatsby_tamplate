import React, { Component } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost
    return (
      <Layout>
        <SEO title="Post" />
        <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
        <div dangerouslySetInnerHTML={{ __html: post.date }} />
        <div dangerouslySetInnerHTML={{ __html: post.slug }} />
      </Layout>
    )
  }
}


export default PostTemplate

export const pageQuery = graphql`
    query currentPostQuery($id: String!) {
        wordpressPost(id: { eq: $id }) {
            title
            content
            date(formatString: "MMMM DD, YYYY")
            slug
        }
        site {
            siteMetadata {
                title
                subtitle
            }
        }
    }
`