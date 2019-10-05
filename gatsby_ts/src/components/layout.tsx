/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
// import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"

const Layout = (props: { children: any }) => {
  const  { children } = props;

  return (
    <>
      <main>{children}</main>
    </>
  )
}

export default Layout
