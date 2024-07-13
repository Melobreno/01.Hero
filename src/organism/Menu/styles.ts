import styled from "styled-components";

export const MenuList = styled.ul`
    margin-left: auto;
`
export const ItemList = styled.li`
    display: inline-block;
    margin-right: 23px;    
    font-weight: 600;

    &:hover{
        a {
            color: #17A4D0;        
        } 
    }

    a {
        color: #1E255E; 
        transition: color 0.20s ease;
    }
`