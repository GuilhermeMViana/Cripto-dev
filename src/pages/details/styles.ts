import styled from "styled-components";

export const Containner = styled.div`
    color: white;

    display: flex;
    flex-direction: column;

    align-items: center;

    gap: 40px;

`

export const CenterContent = styled.div`
    text-align: center;
`

export const ContentBox = styled.div `
    border: 0;
    border-radius: 15px;

    background-color: #1D1C20;

    padding : 120px;

    display: flex;
    flex-direction: column;

    gap:25px;

    b{
        color: #30beff;
        font-style: bolder;
    }

`

export const ImgStyle = styled.img`
    width: 60px;
    height: 60px;
`

export const Profit = styled.h2`
    color: #15803d;

    span::before{
        content: "+";
    }

    span::after{
        content: "%";
    }
`

export const Loss = styled.h2`
    color: #f91257;

    span::after{
        content: "%";
    }
`