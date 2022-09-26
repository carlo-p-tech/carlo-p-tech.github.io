import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'


import {
    Box,
    Center,
    Heading,
    ListItem,
    UnorderedList,
    VStack,
    StackDivider, 
    HStack, 
  } from '@chakra-ui/react'

const AboutPage = () => {
    return (
        <Layout pageTitle="About">
            <VStack 
                divider={<StackDivider borderColor='green.200' />}
                spacing={4}
                align='stretch'>
                <Box p={5} >
                    <Center>
                    <HStack spacing={{ base: "10", sm: "20", "xl": "40", "2xl": "60" }}>
                    <Box minWidth={'15rem'} maxWidth={'15rem'}>
                        <Heading>Hobbies</Heading>
                    </Box>
                    <UnorderedList mt={4}>
                        <ListItem>Sport</ListItem>
                        <ListItem>Robotics</ListItem>
                        <ListItem>Gardening</ListItem>
                        <ListItem>Hiking</ListItem>
                        <ListItem>3D Printing</ListItem>
                    </UnorderedList>
                    <StaticImage 
                        src={"https://images.unsplash.com/photo-1511204338744-5d4e9b3ffee0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1202&q=80"} 
                        alt={"Hobbies"}
                        layout="constrained"
                        height={500}
                    />
                    </HStack>
                    </Center>
                </Box>
                <Box p={5} >
                    <Center>
                    <HStack spacing={{ base: "10", sm: "20", "xl": "40", "2xl": "60" }}>
                    <Box minWidth={'15rem'} maxWidth={'15rem'} >
                        <Heading>Programming Languages</Heading>
                    </Box>
                    <UnorderedList>
                        <ListItem>C/C++</ListItem>
                        <ListItem>Java</ListItem>
                        <ListItem>Python</ListItem>
                        <ListItem>Assembly</ListItem>
                    </UnorderedList>
                    <StaticImage 
                        src={"https://images.unsplash.com/photo-1577375729152-4c8b5fcda381?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"} 
                        alt={"Programming Languages"}
                        layout="constrained"
                        height={500}
                    />
                    </HStack>
                    </Center>
                </Box>

                <Box p={5} >
                    <Center>
                    <HStack spacing={{ base: "10", sm: "20", "xl": "40", "2xl": "60" }}>
                    <Box minWidth={'15rem'} maxWidth={'15rem'} >
                        <Heading>Technology</Heading>
                    </Box>
                    <UnorderedList>
                        <ListItem>ROS2</ListItem>
                        <ListItem>Ardupilot</ListItem>
                        <ListItem>SQL</ListItem>
                        <ListItem>Cloud</ListItem>
                    </UnorderedList>
                    <StaticImage 
                        src={"https://images.unsplash.com/photo-1541504619657-2a60d7301207?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1202&q=80"} 
                        alt={"Technology"}
                        layout="constrained"
                        height={500}
                    />
                    </HStack>
                    </Center>
                </Box>
            
                <Box p={5} >
                    <Center>
                    <HStack spacing={{ base: "10", sm: "20", "xl": "40", "2xl": "60" }}>
                    <Box minWidth={'15rem'} maxWidth={'15rem'} >
                        <Heading>Software</Heading>
                    </Box>
                    <UnorderedList>
                    <ListItem>Fusion360</ListItem>
                        <ListItem>Solidworks</ListItem>
                        <ListItem>Cura</ListItem>
                    </UnorderedList>
                    <StaticImage 
                        src={"https://images.unsplash.com/photo-1568810058919-e84d204a09c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"} 
                        alt={"Software"}
                        layout="constrained"
                        height={500}
                    />
                    </HStack>
                    </Center>
                </Box>
            </VStack>
        </Layout>
    )
}
export default AboutPage