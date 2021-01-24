import React from 'react'
import styled from 'styled-components'

function UiBox({ title, children, className, titleClassName, ...props }) {
    return <Box  {...props} className={`card bg-white shadow-sm ${className || ''}`}>
        <BoxHeader className={`bg-secondary text-white shadow ${titleClassName}`}>{title}</BoxHeader>
        <BoxContainer>
            {children}
        </BoxContainer>
    </Box>
}


const BoxHeader = styled.header`
    padding: .75rem 1.25rem;
    text-align:center;
    font-weight: 700;
    width: 80%;
    margin: 0 auto;
    border-radius: .25rem;
    font-size: 1.25rem;
    transform: translateY(-50%);
`


const BoxContainer = styled.div`
    padding: 1rem;
    padding-top: 0;
    flex:1;
`


const Box = styled.section`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    margin-top: 2.5rem;
`



export default UiBox
