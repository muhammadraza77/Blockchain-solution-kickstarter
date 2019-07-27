import React from 'react';
import Header from './Header';
import Head from 'next/head';
import { Container, Segment } from 'semantic-ui-react';


export default props=>{
    return (
        <Container>
            <Head>
                <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
            </Head>

            <Header></Header>
            {props.children}
            <Segment style={{marginTop:'100px'}} inverted color='blue' size='massive'>Copyright : Nouveau Solutions @2019</Segment>
        </Container>
    );
}