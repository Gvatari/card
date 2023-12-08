import styled, { css } from "styled-components";

type ButtonCardPropsType = {
    button_type: "SeeMore" | "Save"
}

export const ButtonContainerCard = styled.div`
    display: flex;
    gap: 12px;
    margin-top: 19px;
    padding-left: 20px;
`

export const ButtonCard = styled.button<ButtonCardPropsType>`
    width: 86px;
    height: 30px;
    border-radius: 5px;
    font-family: Inter;
    font-size: 10px;
    font-weight: 700;
    border: 2px solid #4E71FE;
    cursor: pointer;
    transition: 0.2s ease;

    ${props => props.button_type === "SeeMore" && css<ButtonCardPropsType>`
        background-color: #4E71FE;
        color: #fff;

        &:hover {
            background-color: #5871d7;
        }
    `}

    ${props => props.button_type === "Save" && css<ButtonCardPropsType>`
        background-color: #fff;
        color: #4E71FE;

        &:hover {
            color: #3046a1;
        }
    `}
`