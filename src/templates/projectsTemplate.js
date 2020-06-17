import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ProjectTemplate from "../components/projects/project-item"
import SEO from "../components/seo"
//import latestProjectsStyles from '../components/homepage/latest-projects.module.scss'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  // const { markdownRemark } = data // data.markdownRemark holds your post data
  // const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO title="Home" />
      <ProjectTemplate data={data} />
    </Layout >
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM, YYYY")
        slug
        title
        category
        url
      }
    }
  }
`


