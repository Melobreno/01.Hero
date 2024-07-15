import styled from "styled-components";

export const Container = styled.button`
        background-color: rgba(23, 164, 208, 1);
        color: #fff;
        padding: 19px 48px;
        border-radius: 100px;
        font-family: Poppins, 'sans-serif';
        font-size: 14px;
        font-weight: 500;
        margin-top: 50px;
        transition: all 0.25s ease-out;

        &:hover{
            background-color: #f8fdff;
            color: rgba(23, 164, 208, 1);
            border: 1px solid rgba(23, 164, 208, 1);
            box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 28%);
        }
`