import styled from "styled-components/native";

export const Header = styled.View`
    background-color: ${(props) => props.theme.main.primary};
    align-items: center;
    justify-content: center;
    height: 40px;
`;

export const SectionTitleContainer = styled.View`
    margin-top: 12px;
    margin-bottom: 6px;
    padding-left: 17px;
`;
export const SectionTitle = styled.Text`
    font-weight: bold;
    font-size: 12px;
`;
