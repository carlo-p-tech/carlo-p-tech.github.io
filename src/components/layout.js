import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { motion } from 'framer-motion'

import { container, siteTitle} from './layout.module.css'
import NavBar from './navBar'
import my_avatar from "../images/me.jpg";
import { Center, useBreakpointValue } from '@chakra-ui/react'

import {
    Flex,
    Box,
    Spacer,
    Avatar,
  } from '@chakra-ui/react';
  

// Gatsby automatically converts kebab case css class name to camelcase

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                title
                }
            }
        }
    `)

    const avatar_size = useBreakpointValue({ base: 'xl',sm:'xl', md: '2xl' });

    return (
        <div className={container}>
        <title> {data.site.siteMetadata.title} | {pageTitle} </title>
        <Flex>
        <Box p='4'>
        <header className={siteTitle}>{data.site.siteMetadata.title}</header>
        </Box>
        <Spacer />
        <Center>
        <Avatar
                key="Avatar"
                size={avatar_size}
                src={my_avatar}
                ignoreFallback={true}
        />
        </Center>
        </Flex>

        <NavBar/>
        {/* <nav>
            <ul className={navLinks}>
            <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
            <li className={navLinkItem}><Link to="/blog" className={navLinkText}>All Blogs</Link></li>
            <li className={navLinkItem}><Link to="/about" className={navLinkText}>About</Link></li>
            <li className={navLinkItem}><Link to="/contact" className={navLinkText}>Contact</Link></li>
            </ul>
        </nav> */}
        <main>
            {/* <h1 className={heading}>{pageTitle}</h1> */}
            <motion.main
                initial={{ opacity: 0, x: -200 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 200 }}
                transition={{
                    type: "spring",
                    mass: 0.35,
                    stiffness: 75,
                    duration: 0.3
                }}
            >
                {children}
            </motion.main>
        </main>
        </div>
    )
}

export default Layout