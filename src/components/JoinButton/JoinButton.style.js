import styled from 'styled-components';

export const BtnComp = styled.button`
    background-color: ${props => props.primary ? "grey" : "red"};
    border: none;
    border-radius: 13px;
    color: ${props => props.primary ? "white" : "black"};
    padding: 10px 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    margin: 2px 2px;
    cursor: pointer;
`;