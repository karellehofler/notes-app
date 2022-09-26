import React from 'react';
import ToggleMenu from './ToggleMenu';
import { Heading, Navbar, Block } from 'react-bulma-components';

export default function Navigation() {
    
    return (
        <Navbar fixed='top'>
            <Navbar.Container flexDirection='row' flexWrap='wrap' justifyContent='space-between' 
            className="is-flex mx-5" style={{ width: '100%'}}>
            <Block display="flex" alignItems="center" style={{ height: '100%' }}>
                <ToggleMenu />
                <Navbar.Brand mx={5} flexDirection="column" className="is-flex nav-branding" alignItems='start'>
                    <Heading className="my-0 is-size-5-mobile" renderAs='h1'>Notes</Heading>
                    <Heading className="my-0 is-size-7-mobile" renderAs='h6' size="6">Markdown Editor</Heading>
                </Navbar.Brand>
            </Block>
            </Navbar.Container>
        </Navbar>
    )
}