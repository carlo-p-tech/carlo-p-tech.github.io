import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// const ContactPage = () => {
//   return (
//         <main>
//             <Layout pageTitle="Contact">
//             <p>
//                 Get in touch!
//             </p>
//             <ContactTable/>
//             </Layout>
//         </main>
//   )
// }


import {
  Button,
  Flex,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';

 const ContactPage = () => {
  return (
    <Layout pageTitle="Contact">
    <Stack minH={'20vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex flex={1} p={8}>
        <StaticImage
          src={'https://images.unsplash.com/photo-1507537362848-9c7e70b7b5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8'}
          alt="LinkedIn"
        />
      </Flex>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'} align={'center'}>
          <Heading fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}>
            <Text color={'blue.400'} align={'center'}>
              Let's get in Touch!
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'sm',md: 'md', lg: 'md' }} color={'gray.500'} align={'center'}>
            Currently LinkedIn is my preferred way of connecting.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button 
              colorScheme={"linkedin"}>
                <a href={"https://www.linkedin.com/in/carlo-pane-0b1663a6/"} target="_blank" rel="noopener noreferrer">Go to my LinkedIn</a>
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </Stack>
    </Layout>
  );
}

export default ContactPage