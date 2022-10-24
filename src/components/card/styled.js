import styled from "styled-components";

export const IconContainer = styled.div`
    position: relative;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 1px solid rgba(24, 202, 153, 1);
    top: -60px;
`

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    jusity-content: center;
    align-items: center;
    border: 1px solid rgba(24, 202, 153, 1);
    border-radius: 10px;
    width: 696px;
    margin: 64px 0;
`

export const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 48px;
    @media (max-width: 768px) {
        margin: 0 32px;
    `

