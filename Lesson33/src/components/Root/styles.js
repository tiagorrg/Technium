import styled from 'styled-components'

export const Root = styled.div`
    font-size: 18px;
`

export const PagesTitle = styled.div`
    display: flex;
    gap: 5px;
    font-weight: 300;
    
    a {
        display: block;
        text-decoration: inherit;
        color: grey;
    }

    a:hover {
        color: #535bf2;
    }

    .active {
        color: #646cff;
    }
`