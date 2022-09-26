import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/layout'

import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Spacer,
  Button,
  Wrap, 
  WrapItem
} from '@chakra-ui/react';

const BlogBlock = ({link, title, date, desc, image_src, ...rest}) => (
    <Link to={link}>
      <Stack p={8} shadow='md' borderWidth='1px'  maxW={'445px'} rounded={'md'} {...rest}>
        <Stack direction='row'>
          <Box>
            <Heading fontSize='xl'>{title}</Heading>
            <Text mt={4}>{date}</Text>
          </Box>
          <Spacer />
          <Center>
            <Button colorScheme='blue'>1 min Read</Button>
          </Center>
        </Stack>
        <Text mt={4}>{desc}</Text>
      </Stack>
    </Link>
)



const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blogs">
      <Wrap spacing={8} p={8}>
      {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <WrapItem>
              <BlogBlock link={`/blog/${node.slug}`} 
                title={node.frontmatter.title} 
                date={node.frontmatter.date} 
                desc={node.frontmatter.desc}/>
            </WrapItem>
              {/* <Link to={`/blog/${node.slug}`}>
                {node.frontmatter.title}
              </Link>
            <h2>
              <Link to={`/blog/${node.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p> */}
          </article>
        ))
      }
      </Wrap>
    </Layout>
  )
}

export const query = graphql`
query MyQuery {
  allMdx(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
        desc
      }
      id
      slug
      parent {
        ... on File {
          id
          name
          modifiedTime(formatString: "MMMM D, YYYY")
        }
      }
    }
  }
}

`

export default BlogPage