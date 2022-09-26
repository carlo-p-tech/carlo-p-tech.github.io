import * as React from 'react'
import { Link } from 'gatsby'

import {
    Box,
    Flex,
    HStack,
    Button,
    useColorModeValue,
    useColorMode,
    Spacer,
    Text
  } from '@chakra-ui/react';

import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const linkStyles = {
    color: '#1A202C',
    display:'inline-block',
    margin: '0 0.5rem',
    padding: '0.25rem',
    textDecoration: 'none'
};

const DarkLinkStyles = {
    color: '#EDF2F7',
    display:'inline-block',
    margin: '0 0.5rem',
    padding: '0.25rem',
    textDecoration: 'none'
};

const activeStyles = {
    color: '#F6AD55',
    display:'inline-block',
    margin: '0 0.5rem',
    padding: '0.25rem',
    textDecoration: 'none'
};

const NavLink = ({to, colourMode, children}) => (
    <Link to={to} style={colourMode} activeStyle={activeStyles}>
        {children}
    </Link>
)

const NavBar = () => {
    const Links = [
        {   
            "link":"/",
            "name":"Home"
        },
        {   
            "link":"/blog",
            "name":"Blogs"
        },
        {   
            "link":"/about",
            "name":"About"
        },
        {   
            "link":"/contact",
            "name":"Contact"
        },
    ];
    const { colorMode, toggleColorMode } = useColorMode();

    const nav_text_col = useColorModeValue(linkStyles, DarkLinkStyles)
    
    return (
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <HStack
                as={'nav'}
                spacing={4}
                display={{ base: 'flex', md: 'flex' }}>
                {Links.map((link) => (
                    <NavLink key={link.link} to={link.link} colourMode={nav_text_col}> 
                        <Text as='b' color='Purple 700'>{link.name}</Text>
                    </NavLink>
                ))}
            </HStack>
            <Spacer />
            <Button onClick={toggleColorMode} mr='1.25vw'>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
            </Flex>
        </Box>
    )
}

export default NavBar