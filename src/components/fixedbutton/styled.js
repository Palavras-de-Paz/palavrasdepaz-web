import styled from "styled-components";

export const FixedBtn = styled.a`
    position: fixed;
    bottom: 325px;
    right: 0;
    width: 200px;
    text-align: center;
    text-decoration: none;
    color: #fff;
    background-color: rgba(33, 170, 133, 1);
    padding: 16px 32px;
    z-index: 1;
    font-size: 24px;
    cursor: pointer;
    &:hover {
        color: #fff
    }
`