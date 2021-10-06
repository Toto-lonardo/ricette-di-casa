import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query Firstquery {
    site(siteMetadata: {}) {
      info: siteMetadata {
        author
        description
        person {
          age
          name
        }
        simpleData
        title
        complexData {
          age
          name
        }
      }
    }
  }
`

const FetchData = () => {
  /* const data = useStaticQuery(getData) */
  const {
    site: {
      info: { title },
    },
  } = useStaticQuery(getData)
  return (
    <div>
      <h1>Titolo del sito: {title}</h1>
    </div>
  )
}

export default FetchData
