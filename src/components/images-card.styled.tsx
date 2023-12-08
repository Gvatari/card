import styled from "styled-components";


type ImagesCardTypeProps = {
    src: string
}

export const ImagesCard = styled.img.attrs<ImagesCardTypeProps>((props) => ({
    src: props.src
}))`
    width: 280px;
    height: 170px;
    margin: 10px 10px 0 10px;
`;