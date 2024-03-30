import styled from "styled-components";

export const Containner = styled.main`
    margin: 0 14px;
`

export const Form = styled.form`
    width: 100%;

    display: flex;
    gap: 14px;

    input {
        width: 100%;
        height: 44px;

        border: 0;
        border-radius: 8px;

        outline: none;
        padding: 0 8px;
    }
`

export const Search = styled.button`
    background-color: #18171c;
    border: 0;
`

export const Table = styled.table`
    margin: 0;
    padding: 0;

    width: 100%;

    table-layout: fixed;

    border-collapse: separate;
    border-spacing: 0 14px;

    th{
        font-size: 14px;
        letter-spacing: 2px;

        text-transform: uppercase;

        color: #fff;
    }

    th,td {
        padding: 14px;
        text-align: center;
    }

    tr{
        background-color: #1D1C20;
    }

    td:first-child, 
    th:first-child {
        border-radius: 8px 0 0 8px;
    }

    td:last-child,
    th:last-child {
        border-radius: 0 8px 8px 0;
    }

    a{
        text-decoration: none;
        color: #fff;

        transition: 0.2s;
    }

    a:hover{
        color: #30beff;
    }
`

export const TableBody = styled.tbody`
   
`

export const TdCoin = styled.td`
    color: #fff;
`

export const TdMarketCap = styled.td`
    color: #bbb;
`

export const TdValue = styled.td`
    color: #bbb;
`

export const TdValuation = styled.td`
    color: #12f98a;
`

export const TdLoss = styled.td`
    color: #f91257;
`