import * as React from "react"
import { graphql, Link } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => {
  const { nodes } = data.allMarkdownRemark
  return (
    <Layout>
      <Seo title="Home" />
      <h1>Hi people</h1>
      <section className="posts">
        {nodes.map(post => {
          const { title, url, image } = post.frontmatter
          const img = getImage(image)
          return (
            <div key={post.id} className="post">
              <div>
                <GatsbyImage image={img} alt={title} />
              </div>
              <div>
                <Link to={url}>{title}</Link>
              </div>
            </div>
          )
        })}
      </section>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query MainPage {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          url
          image {
            id
            childImageSharp {
              gatsbyImageData(
                width: 200
                formats: [AUTO, AVIF]
                placeholder: BLURRED
              )
            }
          }
        }
        id
      }
    }
  }
`
