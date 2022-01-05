import * as React from 'react'
import {Link} from 'gatsby'

const AboutPage = () => {
  return (
    <main>
      <title>About Page</title>
      <h1>Learn about this Blog</h1>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <Link to="/">
        Home Link
      </Link>
    </main>
  )
}
export default AboutPage