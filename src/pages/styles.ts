import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: row;

    > div {
        width: 50%;
    }
    h1{
        color: #1E255E;
        font-weight: 700;
        font-size: 56px;
    }

    h6{
        padding-right: 150px;
        color: rgba(30, 37, 94, 0.7);
        font-size: 16px;
        font-weight: 400;
        margin-top: 20px;
    }
`

export const CollumnImage = styled.div`
        text-align: right;
`
