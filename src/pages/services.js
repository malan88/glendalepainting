import React from 'react'
import {LayoutScroll, SEO} from '../components/global'
import styled from 'styled-components'

import Data from '../data/servicesJSON'

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`
const Item = styled.div`
    width: 20%;
    background-color: ${({theme}) => theme.lightGray};
    margin: 0.8rem;
    padding: 0 2%;
    border-radius: 1.6rem;
    border: 2px solid #d7d7d7;

    img {
        width: 100%;
        margin: 3.2rem auto 0;
        border-radius: 0.64rem;
        border: 1px solid #d7d7d7;
    }
    h1 {
        font-size: 1.8rem;
        color: red;
        margin: 11.8px 0;
    }

    h2 {
        font-size: 1.6rem;
        margin-top: 13.2px;
    }

    p {
        font-size: 1.6rem;
        margin: 2rem 0;
    }
`

const Panel = ({info}) => {
    return (
        <Item>
            <img src={info.pic} style={{ width: '300px', margin: '2rem auto 0 auto' }} alt={info.h1} />
            <h1>{info.h1}</h1>
            <h2>{info.h2}</h2>
            {info.body.map(para => <p>{para}</p>)}
        </Item>
    )
}

const ServicesPage = () => (
    <LayoutScroll>
        <SEO title="Services" />
        <Container>
            {Data.map(info => <Panel info={info} />)}
        </Container>
    </LayoutScroll>
)

export default ServicesPage
