// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { Box, Container, Spacer } from "@chakra-ui/react"

import {
  Stack,
  Flex,
  Text,
  VStack,
  useBreakpointValue,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  useColorModeValue,
} from '@chakra-ui/react';

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">

<Flex
      w={'full'}
      h={'100vh'}
      backgroundImage={
        'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>

      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>

        <Container maxW={'4xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
          <Heading
            color={'white'}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}>
            Welcome to {" "}
            <Text as={'span'} color={'green.400'}>
              CP_Blog
            </Text>
          </Heading>
          <Text 
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
            A site to document my current project progress and showcase any completed work!
          </Text>
          <Spacer/>

          <Accordion bg={useColorModeValue('gray.300', 'gray.800')} allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton _expanded={{ bg: 'green.300', color: 'yellow.300' }}>
                  <Box flex='1' textAlign='left'>
                  <Heading fontSize='xl' textAlign={'center'}>Current Work In Progress</Heading>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Integrating Ardupilot into an Electric Wheelchair
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Stack>
        </Container>
        
      </VStack>
    </Flex>
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage

